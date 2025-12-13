import React from 'react';
import { getWeatherIconUrl, formatDate } from '../services/weatherApi';

/**
 * ForecastCard Component
 * Displays individual day's forecast information
 */
const ForecastCard = ({ date, temp_max, temp_min, weather, rain }) => {
  const weatherInfo = weather[0];
  const weatherIcon = getWeatherIconUrl(weatherInfo.icon);

  return (
    <div className="bg-white rounded-2xl p-4 card-shadow hover:scale-105 transition-transform duration-300 text-center animate-slideUp">
      {/* Date */}
      <p className="text-gray-700 font-semibold mb-3">{formatDate(date)}</p>

      {/* Weather Icon */}
      <img
        src={weatherIcon}
        alt={weatherInfo.main}
        className="w-16 h-16 mx-auto mb-2"
      />

      {/* Weather Description */}
      <p className="text-gray-600 text-sm capitalize mb-3 h-10 flex items-center justify-center">
        {weatherInfo.description}
      </p>

      {/* Temperature Range */}
      <div className="flex justify-center gap-4 items-center">
        <div className="text-center">
          <p className="text-gray-500 text-xs mb-1">High</p>
          <p className="text-2xl font-bold text-blue-600">
            {Math.round(temp_max)}°
          </p>
        </div>
        <div className="w-px h-12 bg-gray-200" />
        <div className="text-center">
          <p className="text-gray-500 text-xs mb-1">Low</p>
          <p className="text-2xl font-bold text-blue-400">
            {Math.round(temp_min)}°
          </p>
        </div>
      </div>

      {/* Rain Probability */}
      {rain && rain['3h'] > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-200">
          <p className="text-gray-500 text-xs mb-1">Rain</p>
          <p className="text-sm font-semibold text-blue-500">
            {rain['3h'].toFixed(1)}mm
          </p>
        </div>
      )}
    </div>
  );
};

export default ForecastCard;
