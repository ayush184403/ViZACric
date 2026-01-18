import React, { useState } from 'react';
import { Play, CheckCircle, Lock } from 'lucide-react';
import { Module } from '../types';

const mockModules: Module[] = [
  {
    id: '1',
    title: 'Grip & Stance Fundamentals',
    level: 'Basic',
    category: 'Batting',
    description: 'Master the V-grip and balanced stance for maximum control.',
    duration: '12 mins',
    completed: true,
    thumbnail: 'https://images.unsplash.com/photo-1624194062195-2c97486e921d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'The Perfect Drive',
    level: 'Basic',
    category: 'Batting',
    description: 'Drills to perfect your cover drive and straight drive.',
    duration: '18 mins',
    completed: false,
    thumbnail: 'https://images.unsplash.com/photo-1593341646261-2484a8677c64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    title: 'Outswing Bowling Mechanics',
    level: 'Intermediate',
    category: 'Bowling',
    description: 'Wrist position and release points for conventional swing.',
    duration: '25 mins',
    completed: false,
    thumbnail: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    title: 'Fielding: High Catches',
    level: 'Basic',
    category: 'Fielding',
    description: 'Technique and safety for taking skiers under pressure.',
    duration: '15 mins',
    completed: false,
    thumbnail: 'https://images.unsplash.com/photo-1589801258579-18e091f4ae2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '5',
    title: 'Captaincy: Field Placements',
    level: 'Advanced',
    category: 'Captaincy',
    description: 'Setting fields for different formats and bowling styles.',
    duration: '30 mins',
    completed: false,
    thumbnail: 'https://picsum.photos/seed/cricket5/800/450',
  },
];

const Learning: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Batting', 'Bowling', 'Fielding', 'Captaincy'];
  const filteredModules = filter === 'All' ? mockModules : mockModules.filter(m => m.category === filter);

  const completedCount = mockModules.filter(m => m.completed).length;
  const progress = (completedCount / mockModules.length) * 100;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">My Learning Path</h2>
        <div className="mt-4 bg-dark-card p-4 rounded-lg border border-gray-700">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400 text-sm">Overall Progress</span>
            <span className="text-cricket font-bold">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div className="bg-cricket h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>

      <div className="flex overflow-x-auto pb-4 mb-6 space-x-2 no-scrollbar">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              filter === cat
                ? 'bg-cricket text-white'
                : 'bg-dark-card text-gray-400 hover:bg-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModules.map((module) => (
          <div key={module.id} className="bg-dark-card rounded-lg overflow-hidden border border-gray-700 hover:border-gray-500 transition-all group">
            <div className="relative h-48">
              <img src={module.thumbnail} alt={module.title} className="w-full h-full object-cover group-hover:opacity-75 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-cricket rounded-full p-3 shadow-lg">
                  <Play className="text-white w-6 h-6 fill-current" />
                </div>
              </div>
              <div className="absolute top-2 right-2">
                 {module.completed && <CheckCircle className="text-cricket w-6 h-6 fill-current bg-dark-bg rounded-full" />}
                 {module.level === 'Advanced' && !module.completed && <Lock className="text-gray-400 w-6 h-6 bg-dark-bg/50 p-1 rounded-full" />}
              </div>
              <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-1 rounded text-xs text-white">
                {module.duration}
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs px-2 py-1 rounded font-semibold ${
                  module.level === 'Basic' ? 'bg-green-900 text-green-300' :
                  module.level === 'Intermediate' ? 'bg-yellow-900 text-yellow-300' :
                  'bg-red-900 text-red-300'
                }`}>
                  {module.level}
                </span>
                <span className="text-xs text-gray-500">{module.category}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-cricket-light transition-colors">{module.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-2">{module.description}</p>
              <button className="mt-4 w-full py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm font-medium text-white transition-colors">
                {module.completed ? 'Review Module' : 'Start Module'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learning;