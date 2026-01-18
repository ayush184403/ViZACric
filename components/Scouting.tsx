import React, { useState } from 'react';
import { User, MapPin, Award, Star, Share2, Video, Phone, Mail } from 'lucide-react';
import { UserProfile, UserRole } from '../types';

const mockUser: UserProfile = {
  name: "Arjun Sharma",
  age: 17,
  role: UserRole.ALL_ROUNDER,
  height: 178,
  weight: 72,
  district: "Mumbai Suburban",
  matchesPlayed: 24,
  battingAverage: 42.5,
  bowlingAverage: 18.2
};

const recentPerformances = [
    { match: "vs Dadar Union", result: "Won", performance: "54 runs (32) & 2/24" },
    { match: "vs Shivaji Park Gymkhana", result: "Lost", performance: "12 runs (10) & 0/45" },
    { match: "vs MIG Club", result: "Won", performance: "88* runs (55) & 3/15 (MOTM)" },
];

const Scouting: React.FC = () => {
  const [recommended, setRecommended] = useState(false);

  const handleRecommend = () => {
    // Simulation of API call to board
    setRecommended(true);
    setTimeout(() => {
        alert("Profile sent to Mumbai Cricket Association (MCA) District Selectors!");
    }, 500);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Card */}
      <div className="bg-dark-card rounded-xl border border-gray-700 overflow-hidden shadow-2xl mb-8">
        <div className="h-32 bg-gradient-to-r from-cricket-dark to-gray-900"></div>
        <div className="px-6 pb-6 relative">
            <div className="flex flex-col md:flex-row items-end -mt-12 mb-4">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-700 rounded-full border-4 border-dark-card overflow-hidden flex items-center justify-center">
                    <User className="w-16 h-16 text-gray-400" />
                </div>
                <div className="md:ml-6 mt-4 md:mt-0 flex-1">
                    <h1 className="text-3xl font-bold text-white">{mockUser.name}</h1>
                    <div className="flex flex-wrap items-center text-gray-400 text-sm mt-1">
                        <span className="flex items-center mr-4"><MapPin className="w-4 h-4 mr-1" /> {mockUser.district}</span>
                        <span className="flex items-center mr-4"><Award className="w-4 h-4 mr-1" /> {mockUser.role}</span>
                        <span className="bg-cricket/20 text-cricket px-2 py-0.5 rounded text-xs border border-cricket/30">Available for Selection</span>
                    </div>
                </div>
                <div className="mt-4 md:mt-0">
                    <button 
                        onClick={handleRecommend}
                        disabled={recommended}
                        className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                            recommended 
                            ? 'bg-gray-700 text-green-400 cursor-default'
                            : 'bg-cricket hover:bg-cricket-dark text-white'
                        }`}
                    >
                        {recommended ? (
                            <>
                                <Star className="w-4 h-4 mr-2 fill-current" /> Recommended
                            </>
                        ) : (
                            <>
                                <Share2 className="w-4 h-4 mr-2" /> Recommend to Board
                            </>
                        )}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 border-t border-gray-700 pt-6">
                <div className="text-center">
                    <div className="text-2xl font-bold text-white">{mockUser.matchesPlayed}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Matches</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-white">{mockUser.battingAverage}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Bat Avg</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-white">{mockUser.bowlingAverage}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Bowl Avg</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-white">{mockUser.age}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Age</div>
                </div>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Recent Form */}
          <div className="md:col-span-2 space-y-6">
              <div className="bg-dark-card rounded-lg border border-gray-700 p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Recent Performances</h3>
                  <div className="space-y-4">
                      {recentPerformances.map((game, idx) => (
                          <div key={idx} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                              <div>
                                  <p className="font-semibold text-white">{game.match}</p>
                                  <p className="text-sm text-cricket">{game.performance}</p>
                              </div>
                              <span className={`px-2 py-1 rounded text-xs font-bold ${
                                  game.result === 'Won' ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'
                              }`}>
                                  {game.result}
                              </span>
                          </div>
                      ))}
                  </div>
              </div>

              <div className="bg-dark-card rounded-lg border border-gray-700 p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Video Highlights</h3>
                  <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-800 rounded-lg h-32 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                          <div className="text-center">
                              <Video className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                              <span className="text-xs text-gray-400">Net Session (Jan 10)</span>
                          </div>
                      </div>
                      <div className="bg-gray-800 rounded-lg h-32 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                          <div className="text-center">
                              <Video className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                              <span className="text-xs text-gray-400">Match Highlights (Dec 22)</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Contact & Bio */}
          <div className="space-y-6">
              <div className="bg-dark-card rounded-lg border border-gray-700 p-6">
                  <h3 className="text-lg font-bold text-white mb-4">About</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                      Explosive middle-order batsman and reliable medium pacer. Captain of the high school team for 2 years. Looking for district level opportunities.
                  </p>
                  <div className="mt-6 space-y-3">
                      <div className="flex items-center text-sm text-gray-300">
                          <Phone className="w-4 h-4 mr-3 text-gray-500" /> +91 98765 43210
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                          <Mail className="w-4 h-4 mr-3 text-gray-500" /> arjun.cricket@email.com
                      </div>
                  </div>
              </div>

              <div className="bg-dark-card rounded-lg border border-gray-700 p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Coach Ratings</h3>
                  <div className="space-y-3">
                      <div>
                          <div className="flex justify-between text-xs text-gray-400 mb-1">
                              <span>Technique</span>
                              <span>8.5/10</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-1.5">
                              <div className="bg-cricket h-1.5 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                      </div>
                      <div>
                          <div className="flex justify-between text-xs text-gray-400 mb-1">
                              <span>Fitness</span>
                              <span>9.0/10</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-1.5">
                              <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '90%' }}></div>
                          </div>
                      </div>
                      <div>
                          <div className="flex justify-between text-xs text-gray-400 mb-1">
                              <span>Discipline</span>
                              <span>9.5/10</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-1.5">
                              <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '95%' }}></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Scouting;