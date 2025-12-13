import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import ForecastSection from './components/ForecastSection';
import Footer from './components/Footer';
import { getCurrentWeather, getForecast } from './services/weatherApi';

/**
 * Main App Component
 * Orchestrates the weather app functionality
 */
function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastSearchedCity, setLastSearchedCity] = useState('London');

  // Fetch weather data on component mount with default city
  useEffect(() => {
    fetchWeatherData(lastSearchedCity);
  }, []);

  /**
   * Fetch weather and forecast data for a given city
   */
  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError(null);
    setWeather(null);
    setForecast(null);

    try {
      // Fetch current weather
      const weatherData = await getCurrentWeather(city);
      setWeather(weatherData);

      // Fetch forecast
      const forecastData = await getForecast(city);
      setForecast(forecastData);

      // Update last searched city
      setLastSearchedCity(city);
    } catch (err) {
      setError(err.message);
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handle search form submission
   */
  const handleSearch = (city) => {
    fetchWeatherData(city);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header with search */}
      <Header onSearch={handleSearch} isLoading={loading} />

      {/* Main content */}
      <main className="flex-1">
        {/* Weather card section */}
        <WeatherCard weather={weather} loading={loading} error={error} />

        {/* Forecast section */}
        {weather && <ForecastSection forecast={forecast} loading={loading} />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
