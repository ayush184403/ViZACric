import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Learning from './components/Learning';
import Analytics from './components/Analytics';
import Fitness from './components/Fitness';
import Scouting from './components/Scouting';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg text-dark-text flex flex-col font-sans">
        <Navigation />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/scouting" element={<Scouting />} />
            <Route path="/profile" element={<Scouting />} /> {/* Reusing Scouting as Profile for demo */}
          </Routes>
        </div>

        <footer className="bg-dark-card border-t border-gray-800 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold text-white tracking-tight">ViZACric</span>
              <p className="text-sm text-gray-500 mt-1">Empowering the next generation of cricketers.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;