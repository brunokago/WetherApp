import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org';

// Get current weather data for a city
export const getCurrentWeather = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error(`City "${city}" not found. Please try another city.`);
    }
    throw new Error('Failed to fetch weather data. Please try again.');
  }
};

// Get 5-day forecast data for a city
export const getForecast = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch forecast data.');
  }
};

// Get weather by coordinates
export const getWeatherByCoordinates = async (lat, lon) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather data.');
  }
};

// Format timestamp to readable date
export const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
};

// Format timestamp to time
export const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

// Get weather icon URL
export const getWeatherIconUrl = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};
