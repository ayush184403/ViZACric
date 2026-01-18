export enum UserRole {
  BATSMAN = 'Batsman',
  BOWLER = 'Bowler',
  ALL_ROUNDER = 'All-Rounder',
  WICKET_KEEPER = 'Wicket Keeper'
}

export interface UserProfile {
  name: string;
  age: number;
  role: UserRole;
  height: number; // cm
  weight: number; // kg
  district: string;
  matchesPlayed: number;
  battingAverage?: number;
  bowlingAverage?: number;
}

export interface Module {
  id: string;
  title: string;
  level: 'Basic' | 'Intermediate' | 'Advanced';
  category: 'Batting' | 'Bowling' | 'Fielding' | 'Captaincy';
  description: string;
  duration: string; // e.g., "10 mins"
  completed: boolean;
  thumbnail: string;
}

export interface FitnessPlanRequest {
  age: number;
  role: string;
  height: number;
  weight: number;
  goal: string;
  injuries?: string;
}

export interface AnalyticsData {
  techniqueScore: number;
  shotEfficiency: number;
  staminaIndex: number;
  consistency: number;
}