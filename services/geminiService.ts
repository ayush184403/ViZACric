import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateFitnessPlan = async (
  age: number,
  role: string,
  height: number,
  weight: number,
  goal: string,
  injuries: string
): Promise<string> => {
  if (!apiKey) return "API Key missing. Please configure your API key to generate a plan.";

  try {
    const prompt = `
      Act as a professional cricket fitness coach and nutritionist.
      Create a concise, personalized weekly workout and nutrition plan for a cricketer with the following profile:
      - Age: ${age}
      - Role: ${role}
      - Height: ${height}cm
      - Weight: ${weight}kg
      - Main Goal: ${goal}
      - Injuries/Concerns: ${injuries || 'None'}

      Format the response in Markdown. Include:
      1. **Focus Areas**: Key physical attributes to improve for this specific role.
      2. **Weekly Workout Schedule**: A 5-day routine (Strength, Cardio, Agility, Mobility).
      3. **Nutrition Guidelines**: Pre-match, during match, and recovery meals.
      4. **Injury Prevention**: Specific drills for their role (e.g., shoulder care for bowlers, back for batters).
      Keep it practical and motivational.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "Failed to generate plan.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while generating the fitness plan. Please try again.";
  }
};

export const analyzeTechnique = async (imageBase64: string, description: string): Promise<string> => {
  if (!apiKey) return "API Key missing.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: 'image/jpeg',
              data: imageBase64,
            },
          },
          {
            text: `You are an expert cricket coach (AI Analyst). Analyze this image frame (which is part of a player's training video) along with their description: "${description}".
            
            Provide a technical analysis:
            1. **Stance/Posture**: Evaluate the body alignment.
            2. **Technique**: Identify strengths and flaws in the visible action.
            3. **Correction Drills**: Suggest 2 specific drills to improve.
            4. **Pro Comparison**: Briefly mention a famous player with a similar style (if applicable).
            
            Keep the tone constructive and professional. Use Markdown.`
          }
        ]
      }
    });

    return response.text || "Could not analyze the image.";
  } catch (error) {
    console.error("Gemini Vision Error:", error);
    return "An error occurred during analysis. Please try again.";
  }
};