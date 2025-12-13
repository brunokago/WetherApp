import React from 'react';
import { getWeatherIconUrl } from '../services/weatherApi';

/**
 * WeatherCard Component
 * Displays main weather information in a featured card
 */
const WeatherCard = ({ weather, loading, error }) => {
  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 mt-8 animate-fadeIn">
        <div className="bg-white rounded-3xl p-8 md:p-12 card-shadow animate-shimmer">
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <div className="inline-block w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
              <p className="mt-4 text-gray-600 text-lg font-medium">
                Loading weather data...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 mt-8 animate-fadeIn">
        <div className="bg-white rounded-3xl p-8 md:p-12 card-shadow border-l-4 border-red-500">
          <div className="flex items-center gap-4">
            <div className="text-4xl">⚠️</div>
            <div>
              <h3 className="text-xl font-bold text-red-600">Oops! Something went wrong</h3>
              <p className="text-gray-600 mt-1">{error}</p>
              <p className="text-gray-500 text-sm mt-2">
                Please check the city name and try again.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!weather) return null;

  const {
    name,
    sys,
    main,
    weather: weatherList,
    wind,
    clouds,
    visibility,
  } = weather;

  const weatherInfo = weatherList[0];
  const weatherIcon = getWeatherIconUrl(weatherInfo.icon);
  const tempInt = Math.round(main.temp);
  const feelsLike = Math.round(main.feels_like);

  return (
    <div className="max-w-4xl mx-auto px-4 mt-8 animate-slideUp">
      <div className="bg-white rounded-3xl p-8 md:p-12 card-shadow overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full -mr-10 -mt-10 opacity-50" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-50 rounded-full -ml-8 -mb-8 opacity-70" />

        <div className="relative z-10">
          {/* Location and time */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              {name}, {sys.country}
            </h2>
            <p className="text-gray-500 mt-2 text-lg">
              {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>

          {/* Main weather display */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
            {/* Temperature and description */}
            <div className="flex items-center gap-6">
              <img
                src={weatherIcon}
                alt={weatherInfo.main}
                className="w-32 h-32 drop-shadow-lg"
              />
              <div>
                <div className="text-7xl font-bold text-blue-600">{tempInt}°</div>
                <p className="text-xl text-gray-600 capitalize mt-2">
                  {weatherInfo.description}
                </p>
                <p className="text-gray-500 mt-1">
                  Feels like {feelsLike}°
                </p>
              </div>
            </div>

            {/* Additional info grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Humidity */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4">
                <p className="text-gray-600 text-sm font-medium mb-1">Humidity</p>
                <p className="text-3xl font-bold text-blue-600">{main.humidity}%</p>
              </div>

              {/* Wind Speed */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4">
                <p className="text-gray-600 text-sm font-medium mb-1">Wind Speed</p>
                <p className="text-3xl font-bold text-blue-600">{wind.speed.toFixed(1)}m/s</p>
              </div>

              {/* Pressure */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4">
                <p className="text-gray-600 text-sm font-medium mb-1">Pressure</p>
                <p className="text-3xl font-bold text-blue-600">{main.pressure}mb</p>
              </div>

              {/* Cloud Coverage */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4">
                <p className="text-gray-600 text-sm font-medium mb-1">Clouds</p>
                <p className="text-3xl font-bold text-blue-600">{clouds.all}%</p>
              </div>

              {/* Visibility */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4">
                <p className="text-gray-600 text-sm font-medium mb-1">Visibility</p>
                <p className="text-3xl font-bold text-blue-600">
                  {(visibility / 1000).toFixed(1)}km
                </p>
              </div>

              {/* Temperature Range */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4">
                <p className="text-gray-600 text-sm font-medium mb-1">Temp Range</p>
                <p className="text-lg font-bold text-blue-600">
                  {Math.round(main.temp_max)}° / {Math.round(main.temp_min)}°
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
