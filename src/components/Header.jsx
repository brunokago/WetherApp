import React from 'react';
import { getWeatherIconUrl } from '../services/weatherApi';

/**
 * Header Component
 * Displays the app title and search bar
 */
const Header = ({ onSearch, isLoading }) => {
  const [searchValue, setSearchValue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      onSearch(searchValue);
      setSearchValue('');
    }
  };

  return (
    <header className="gradient-header text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col gap-6">
          {/* App Title */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              🌤️ WeatherApp
            </h1>
            <p className="text-blue-100 mt-2 text-sm md:text-base">
              Real-time Weather Forecast for Your City
            </p>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSubmit} className="flex justify-center">
            <div className="w-full max-w-md">
              <div className="relative">
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search for a city..."
                  className="w-full px-6 py-3 pr-14 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-full transition-colors duration-200 disabled:opacity-50"
                >
                  {isLoading ? (
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    '🔍'
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
