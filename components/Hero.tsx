import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, Target, TrendingUp, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-dark-bg sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Master your game with</span>{' '}
                <span className="block text-cricket">Data & Discipline</span>
              </h1>
              <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                ViZACric bridges the gap between grassroots talent and professional excellence. access elite coaching, AI-driven analytics, and a direct path to district selection.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/learning"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cricket hover:bg-cricket-dark md:py-4 md:text-lg transition-colors"
                  >
                    Start Training
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/analytics"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-cricket bg-cricket-light/10 hover:bg-cricket-light/20 md:py-4 md:text-lg transition-colors"
                  >
                    Analyze My Game
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-800 flex items-center justify-center overflow-hidden">
        {/* Placeholder for Hero Video/Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg to-transparent z-10"></div>
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-60"
          src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Cricket batsman in action"
        />
      </div>

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 bg-dark-card rounded-lg border border-gray-700 hover:border-cricket transition-colors">
            <div className="w-12 h-12 bg-cricket/20 rounded-lg flex items-center justify-center mb-4">
              <PlayCircle className="text-cricket w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-white">E-Learning</h3>
            <p className="mt-2 text-sm text-gray-400">Structured modules from basics to advanced captaincy tactics.</p>
          </div>
          <div className="p-6 bg-dark-card rounded-lg border border-gray-700 hover:border-cricket transition-colors">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <Target className="text-blue-500 w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-white">AI Analytics</h3>
            <p className="mt-2 text-sm text-gray-400">Upload gameplay to get instant feedback on technique and form.</p>
          </div>
          <div className="p-6 bg-dark-card rounded-lg border border-gray-700 hover:border-cricket transition-colors">
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="text-red-500 w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-white">Smart Fitness</h3>
            <p className="mt-2 text-sm text-gray-400">Personalized workout and diet plans tailored to your role.</p>
          </div>
          <div className="p-6 bg-dark-card rounded-lg border border-gray-700 hover:border-cricket transition-colors">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
              <ShieldCheck className="text-yellow-500 w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-white">Scouting</h3>
            <p className="mt-2 text-sm text-gray-400">Build your profile and get recommended to district selectors.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;