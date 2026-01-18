import React, { useState, useRef } from 'react';
import { Upload, Cpu, BarChart2, AlertCircle, Play } from 'lucide-react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid
} from 'recharts';
import { analyzeTechnique } from '../services/geminiService';

const mockBattingData = [
  { shot: 'Cover Drive', efficiency: 85, frequency: 12 },
  { shot: 'Pull Shot', efficiency: 65, frequency: 8 },
  { shot: 'Cut Shot', efficiency: 70, frequency: 10 },
  { shot: 'Straight Drive', efficiency: 90, frequency: 5 },
  { shot: 'Sweep', efficiency: 40, frequency: 3 },
];

const mockRadarData = [
  { subject: 'Timing', A: 120, fullMark: 150 },
  { subject: 'Footwork', A: 98, fullMark: 150 },
  { subject: 'Power', A: 86, fullMark: 150 },
  { subject: 'Defense', A: 99, fullMark: 150 },
  { subject: 'Placement', A: 85, fullMark: 150 },
  { subject: 'Running', A: 65, fullMark: 150 },
];

const Analytics: React.FC = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleAnalyze = async () => {
    if (!file || !preview) return;

    setAnalyzing(true);
    setResult(null);

    // Get Base64 without prefix for Gemini
    const base64Data = preview.split(',')[1];
    
    try {
        const analysis = await analyzeTechnique(base64Data, description || "Batting stance analysis");
        setResult(analysis);
    } catch (err) {
        setResult("Error processing analysis.");
    } finally {
        setAnalyzing(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Upload & AI */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-dark-card p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Cpu className="w-6 h-6 text-cricket mr-2" />
              AI Shot Analysis
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Upload a snapshot of your batting stance or bowling action. Our AI will identify technical flaws.
            </p>
            
            <div 
              className="border-2 border-dashed border-gray-600 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-cricket transition-colors mb-4"
              onClick={() => fileInputRef.current?.click()}
            >
              {preview ? (
                <img src={preview} alt="Preview" className="max-h-48 rounded object-cover" />
              ) : (
                <>
                  <Upload className="w-10 h-10 text-gray-500 mb-2" />
                  <span className="text-sm text-gray-400">Click to upload image</span>
                </>
              )}
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
                accept="image/*"
              />
            </div>
            
            <textarea
                className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-white text-sm mb-4 focus:border-cricket focus:outline-none"
                placeholder="Describe the shot (e.g. 'Cover drive vs pace')"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button
              onClick={handleAnalyze}
              disabled={analyzing || !file}
              className={`w-full py-3 rounded-lg font-bold text-white flex items-center justify-center ${
                analyzing || !file 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-cricket hover:bg-cricket-dark'
              }`}
            >
              {analyzing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Analyzing...
                </>
              ) : (
                'Analyze Technique'
              )}
            </button>
          </div>

          {result && (
            <div className="bg-dark-card p-6 rounded-lg border border-gray-700 animate-fade-in">
              <h4 className="font-bold text-white mb-2 flex items-center">
                <AlertCircle className="w-5 h-5 text-yellow-500 mr-2" />
                Coach's Feedback
              </h4>
              <div className="prose prose-invert prose-sm max-w-none">
                 <div className="whitespace-pre-wrap text-gray-300 font-light text-sm">
                    {result}
                 </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Charts */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-dark-card p-6 rounded-lg border border-gray-700">
             <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white flex items-center">
                    <BarChart2 className="w-6 h-6 text-blue-500 mr-2" />
                    Batting Efficiency
                </h3>
                <span className="text-xs bg-blue-900 text-blue-200 px-2 py-1 rounded">Last 5 Matches</span>
             </div>
             <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={mockBattingData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="shot" stroke="#9CA3AF" fontSize={12} />
                        <YAxis stroke="#9CA3AF" fontSize={12} />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', color: '#fff' }}
                            itemStyle={{ color: '#fff' }}
                        />
                        <Bar dataKey="efficiency" name="Control %" fill="#228B22" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="frequency" name="Frequency" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
             </div>
          </div>

          <div className="bg-dark-card p-6 rounded-lg border border-gray-700">
             <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white flex items-center">
                    <Cpu className="w-6 h-6 text-purple-500 mr-2" />
                    Skill Spider Graph
                </h3>
             </div>
             <div className="h-64 w-full flex justify-center">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={mockRadarData}>
                        <PolarGrid stroke="#374151" />
                        <PolarAngleAxis dataKey="subject" stroke="#9CA3AF" fontSize={12} />
                        <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="#4B5563" />
                        <Radar
                            name="Player Stats"
                            dataKey="A"
                            stroke="#228B22"
                            strokeWidth={2}
                            fill="#228B22"
                            fillOpacity={0.5}
                        />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#1F2937', border: 'none', color: '#fff' }}
                            itemStyle={{ color: '#228B22' }}
                        />
                    </RadarChart>
                </ResponsiveContainer>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;