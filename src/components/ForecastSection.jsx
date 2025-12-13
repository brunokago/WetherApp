import React from 'react';
import ForecastCard from './ForecastCard';

/**
 * ForecastSection Component
 * Displays 5-day forecast in a responsive grid
 */
const ForecastSection = ({ forecast, loading }) => {
  if (loading || !forecast) return null;

  // Group forecast data by day and get daily max/min
  const dailyForecasts = {};

  forecast.list.forEach((item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString();

    if (!dailyForecasts[date]) {
      dailyForecasts[date] = {
        dt: item.dt,
        temps: [item.main.temp_max, item.main.temp_min],
        weather: item.weather,
        rain: item.rain,
      };
    } else {
      dailyForecasts[date].temps.push(item.main.temp_max, item.main.temp_min);
      if (!dailyForecasts[date].rain && item.rain) {
        dailyForecasts[date].rain = item.rain;
      }
    }
  });

  // Convert to array and get first 5 days
  const forecastDays = Object.entries(dailyForecasts)
    .slice(0, 5)
    .map(([date, data]) => ({
      date: data.dt,
      temp_max: Math.max(...data.temps),
      temp_min: Math.min(...data.temps),
      weather: data.weather,
      rain: data.rain,
    }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-fadeIn">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        5-Day Forecast
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {forecastDays.map((day, index) => (
          <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            <ForecastCard
              date={day.date}
              temp_max={day.temp_max}
              temp_min={day.temp_min}
              weather={day.weather}
              rain={day.rain}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastSection;
