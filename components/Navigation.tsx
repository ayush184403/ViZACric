import React, { useState } from 'react';
import { Activity, BookOpen, User, LineChart, Menu, X, Trophy } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Learning', icon: <BookOpen className="w-5 h-5" />, path: '/learning' },
    { name: 'Analytics', icon: <LineChart className="w-5 h-5" />, path: '/analytics' },
    { name: 'Fitness', icon: <Activity className="w-5 h-5" />, path: '/fitness' },
    { name: 'Scouting', icon: <Trophy className="w-5 h-5" />, path: '/scouting' },
    { name: 'Profile', icon: <User className="w-5 h-5" />, path: '/profile' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-dark-card border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center flex-shrink-0">
              <div className="w-8 h-8 bg-cricket rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">ViZACric</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'bg-cricket text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-card">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'bg-cricket text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;