# 💻 Code Snippets & Customization Examples

## Component Customization Examples

### 1. Add Favorites/History Feature

**File: src/components/SearchHistory.jsx**

```javascript
import React from 'react';

const SearchHistory = ({ history, onSelect }) => {
  return (
    <div className="mt-4">
      {history.length > 0 && (
        <div>
          <p className="text-gray-600 text-sm mb-2">Recent Searches:</p>
          <div className="flex flex-wrap gap-2">
            {history.map((city, idx) => (
              <button
                key={idx}
                onClick={() => onSelect(city)}
                className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded-full text-sm transition-colors"
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchHistory;
```

**Update App.jsx:**
```javascript
const [searchHistory, setSearchHistory] = useState([]);

const handleSearch = (city) => {
  fetchWeatherData(city);
  // Add to history if not already there
  if (!searchHistory.includes(city)) {
    setSearchHistory([city, ...searchHistory.slice(0, 4)]);
  }
};

// In JSX:
<SearchHistory history={searchHistory} onSelect={handleSearch} />
```

### 2. Add Temperature Unit Toggle

**File: src/components/UnitToggle.jsx**

```javascript
import React from 'react';

const UnitToggle = ({ unit, onToggle }) => {
  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => onToggle('C')}
        className={`px-3 py-1 rounded-lg font-semibold transition-colors ${
          unit === 'C'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        °C
      </button>
      <button
        onClick={() => onToggle('F')}
        className={`px-3 py-1 rounded-lg font-semibold transition-colors ${
          unit === 'F'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        °F
      </button>
    </div>
  );
};

export default UnitToggle;
```

**Update weatherApi.js:**
```javascript
export const convertTemperature = (celsius, unit) => {
  if (unit === 'F') {
    return (celsius * 9/5) + 32;
  }
  return celsius;
};
```

### 3. Add Dark Mode

**File: src/components/ThemeToggle.jsx**

```javascript
import React from 'react';

const ThemeToggle = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-colors"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
```

**Update App.jsx:**
```javascript
const [isDarkMode, setIsDarkMode] = useState(false);

useEffect(() => {
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [isDarkMode]);

// In JSX:
<ThemeToggle isDark={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />
```

### 4. Add Weather Alerts

**File: src/components/AlertBox.jsx**

```javascript
import React from 'react';

const AlertBox = ({ message, type = 'info', onClose }) => {
  const bgColor = {
    info: 'bg-blue-100 border-blue-500 text-blue-700',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    error: 'bg-red-100 border-red-500 text-red-700',
    success: 'bg-green-100 border-green-500 text-green-700',
  }[type];

  return (
    <div className={`border-l-4 p-4 mb-4 ${bgColor} rounded`}>
      <div className="flex justify-between items-center">
        <p>{message}</p>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default AlertBox;
```

## API Enhancement Examples

### 1. Add Geolocation Support

**File: src/services/geolocation.js**

```javascript
export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation not supported'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        reject(new Error('Location permission denied'));
      }
    );
  });
};
```

**Use in App.jsx:**
```javascript
import { getUserLocation } from './services/geolocation';

const handleLocationClick = async () => {
  try {
    const { lat, lon } = await getUserLocation();
    const weather = await getWeatherByCoordinates(lat, lon);
    setWeather(weather);
  } catch (error) {
    setError(error.message);
  }
};
```

### 2. Add Local Storage Caching

**File: src/services/cache.js**

```javascript
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

export const getCachedWeather = (city) => {
  const cached = localStorage.getItem(`weather_${city}`);
  if (!cached) return null;

  const { data, timestamp } = JSON.parse(cached);
  if (Date.now() - timestamp > CACHE_DURATION) {
    localStorage.removeItem(`weather_${city}`);
    return null;
  }
  return data;
};

export const setCachedWeather = (city, data) => {
  localStorage.setItem(`weather_${city}`, JSON.stringify({
    data,
    timestamp: Date.now(),
  }));
};
```

**Use in App.jsx:**
```javascript
const fetchWeatherData = async (city) => {
  // Check cache first
  const cached = getCachedWeather(city);
  if (cached) {
    setWeather(cached);
    return;
  }

  // Fetch from API
  const weatherData = await getCurrentWeather(city);
  setCachedWeather(city, weatherData);
  setWeather(weatherData);
};
```

## Styling Examples

### 1. Add Custom Gradient

**File: src/index.css**

```css
.gradient-sunset {
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%);
}

.gradient-ocean {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### 2. Add Floating Animation

**File: tailwind.config.js**

```javascript
theme: {
  extend: {
    keyframes: {
      float: {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-20px)' },
      },
    },
    animation: {
      float: 'float 3s ease-in-out infinite',
    },
  },
}
```

### 3. Add Glassmorphism Effect

```javascript
// Use in components
className="bg-white/40 backdrop-blur-md border border-white/20 rounded-2xl"
```

## Testing Examples

### 1. Test API with Mock Data

**File: src/services/mockData.js**

```javascript
export const mockWeather = {
  name: 'London',
  sys: { country: 'GB' },
  main: {
    temp: 15.5,
    feels_like: 14.8,
    humidity: 72,
    pressure: 1013,
    temp_max: 17.1,
    temp_min: 13.2,
  },
  weather: [{
    main: 'Clouds',
    description: 'few clouds',
    icon: '02d',
  }],
  wind: { speed: 4.5 },
  clouds: { all: 20 },
  visibility: 10000,
};

export const mockForecast = {
  list: Array(40).fill(mockWeather),
};
```

**Use for testing:**
```javascript
// In App.jsx for development
if (process.env.NODE_ENV === 'development' && false) {
  setWeather(mockWeather);
  setForecast(mockForecast);
  return;
}
```

## Performance Optimization Examples

### 1. Debounce Search Input

**File: src/hooks/useDebounce.js**

```javascript
import { useEffect, useState } from 'react';

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};
```

**Use in Header.jsx:**
```javascript
const debouncedSearch = useDebounce(searchValue, 500);

useEffect(() => {
  if (debouncedSearch) {
    onSearch(debouncedSearch);
  }
}, [debouncedSearch]);
```

### 2. Lazy Load Forecast Cards

```javascript
import React, { lazy, Suspense } from 'react';

const ForecastCard = lazy(() => import('./ForecastCard'));

export const ForecastSection = ({ forecast }) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {forecast.map((day) => (
        <Suspense key={day.date} fallback={<div>Loading...</div>}>
          <ForecastCard {...day} />
        </Suspense>
      ))}
    </div>
  );
};
```

## Advanced Features

### 1. Multi-City Comparison

```javascript
const [selectedCities, setSelectedCities] = useState([]);
const [weatherData, setWeatherData] = useState({});

const toggleCity = async (city) => {
  if (selectedCities.includes(city)) {
    setSelectedCities(selectedCities.filter(c => c !== city));
  } else {
    const weather = await getCurrentWeather(city);
    setWeatherData({ ...weatherData, [city]: weather });
    setSelectedCities([...selectedCities, city]);
  }
};
```

### 2. Weather Alerts System

```javascript
const [alerts, setAlerts] = useState([]);

const checkWeatherAlerts = (weather) => {
  const newAlerts = [];
  
  if (weather.wind.speed > 10) {
    newAlerts.push('High wind warning');
  }
  if (weather.main.humidity > 90) {
    newAlerts.push('High humidity alert');
  }
  if (weather.main.temp < 0) {
    newAlerts.push('Freezing temperature');
  }
  
  setAlerts(newAlerts);
};
```

---

**Enjoy extending WeatherApp! Happy coding! 🚀**
