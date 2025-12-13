# 📚 WeatherApp API Integration Guide

## OpenWeatherMap API Overview

### API Endpoints Used

#### 1. Current Weather
```
GET https://api.openweathermap.org/data/2.5/weather
Parameters:
  - q={city}
  - units=metric
  - appid={API_KEY}
```

**Response Example:**
```json
{
  "coord": { "lon": -0.1257, "lat": 51.5085 },
  "weather": [
    {
      "id": 801,
      "main": "Clouds",
      "description": "few clouds",
      "icon": "02d"
    }
  ],
  "main": {
    "temp": 15.5,
    "feels_like": 14.8,
    "temp_min": 13.2,
    "temp_max": 17.1,
    "pressure": 1013,
    "humidity": 72
  },
  "wind": {
    "speed": 4.5,
    "deg": 220
  },
  "clouds": {
    "all": 20
  },
  "visibility": 10000,
  "sys": {
    "country": "GB",
    "sunrise": 1702000000,
    "sunset": 1702030000
  },
  "name": "London"
}
```

#### 2. 5-Day Forecast
```
GET https://api.openweathermap.org/data/2.5/forecast
Parameters:
  - q={city}
  - units=metric
  - appid={API_KEY}
```

**Response Example:**
```json
{
  "list": [
    {
      "dt": 1702012800,
      "main": {
        "temp": 14.2,
        "temp_max": 15.1,
        "temp_min": 13.8,
        "pressure": 1012,
        "humidity": 75
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "wind": {
        "speed": 4.2
      },
      "rain": {
        "3h": 0.1
      },
      "clouds": {
        "all": 25
      }
    },
    // ... more forecast entries (3-hourly for 5 days)
  ],
  "city": {
    "name": "London",
    "country": "GB",
    "lat": 51.5085,
    "lon": -0.1257
  }
}
```

## API Call Flow in App

```
User Search
    ↓
App.jsx handleSearch()
    ↓
fetchWeatherData(city)
    ↓
weatherApi.js getCurrentWeather(city) + getForecast(city)
    ↓
API Requests to OpenWeatherMap
    ↓
Response Data Processing
    ↓
setWeather() + setForecast() State Updates
    ↓
Component Re-render with New Data
    ↓
Display Weather Information
```

## Error Handling

### Error Scenarios & Messages

```javascript
// City not found (404)
"City \"Paris\" not found. Please try another city."

// Network error
"Failed to fetch weather data. Please try again."

// API key invalid
"Invalid API key. Please check your configuration."

// Rate limit exceeded
"API rate limit exceeded. Please try again later."
```

## Data Processing & Formatting

### Temperature Formatting
```javascript
// Raw: 15.534 (Celsius)
// Display: 16° (rounded)
Math.round(main.temp) // Returns: 16
```

### Date Formatting
```javascript
// Raw: 1702012800 (Unix timestamp)
// Display: "Dec 08" or "Friday, December 8"
new Date(timestamp * 1000).toLocaleDateString('en-US', {
  weekday: 'short',
  month: 'short',
  day: 'numeric'
})
```

### Wind Speed
```javascript
// Raw: 4.5 (meters per second)
// Display: "4.5 m/s"
wind.speed.toFixed(1) + ' m/s'
```

### Visibility
```javascript
// Raw: 10000 (meters)
// Display: "10.0 km"
(visibility / 1000).toFixed(1) + ' km'
```

### Weather Icon
```javascript
// Raw: "02d" (icon code from API)
// URL: "https://openweathermap.org/img/wn/02d@2x.png"
const url = `https://openweathermap.org/img/wn/${iconCode}@2x.png`
```

## API Response Status Codes

| Code | Status | Meaning | Action |
|------|--------|---------|--------|
| 200 | OK | Successful request | Display data |
| 404 | Not Found | City doesn't exist | Show error message |
| 401 | Unauthorized | Invalid API key | Check .env configuration |
| 429 | Too Many Requests | Rate limit exceeded | Wait and retry |
| 500 | Server Error | OpenWeatherMap down | Inform user to try later |

## Testing the API

### Manual API Testing

**cURL Example:**
```bash
curl "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=YOUR_API_KEY"
```

**Browser Test:**
```
https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=YOUR_API_KEY
```

### Test Cities (Common)
- London, UK
- New York, USA
- Tokyo, Japan
- Sydney, Australia
- Mumbai, India
- Dubai, UAE
- Paris, France
- Singapore

### Test Edge Cases
- Small towns (may not be found)
- Cities with special characters: "São Paulo", "Beijing"
- Duplicate city names: "Springfield, USA" vs "Springfield, UK"
- Invalid input: "xyz123", "!@#$%", empty string

## API Rate Limiting

**Free Tier:**
- 60 calls/minute
- Unlimited calls/day (some plans have limits)
- No caching required for demo

**Optimization:**
- Debounce search input to prevent excessive calls
- Cache results locally (optional enhancement)

## Forecast Data Processing

### Raw Data
- 40 entries (5 days × 8 periods/day)
- 3-hour intervals
- Includes every 3-hour forecast

### Processing Logic
```javascript
// Group by date and find daily max/min
dailyForecasts[date] = {
  temp_max: Math.max(...temps),
  temp_min: Math.min(...temps),
  weather: weather_info,
  rain: rain_data
}

// Return first 5 unique days
```

## Environment Variables & Security

### Secure Practices
```
✅ DO: Store API key in .env
❌ DON'T: Hardcode API key in source code
❌ DON'T: Commit .env to git
⚠️  NOTE: Frontend API key is visible to users
```

### For Production
```javascript
// Option 1: Use backend proxy
const response = await fetch('/api/weather?city=London')

// Option 2: Use environment-specific keys
const apiKey = process.env.NODE_ENV === 'production' 
  ? process.env.VITE_PROD_API_KEY
  : process.env.VITE_DEV_API_KEY
```

## Performance Metrics

### API Response Times
- Current Weather: ~100-300ms
- 5-Day Forecast: ~100-300ms
- Combined request: ~300-600ms

### Data Usage
- Per request: ~5-10 KB
- Typical usage (10 searches): ~50-100 KB

## Common Issues & Solutions

### 401 Unauthorized
```
Problem: API key is invalid or expired
Solution: 
1. Verify API key in .env
2. Check key hasn't been revoked
3. Restart dev server
```

### 404 City Not Found
```
Problem: City name not recognized
Solution:
1. Check spelling
2. Try without country name
3. Use Wikipedia to find exact name
```

### No Data Displayed
```
Problem: API response received but not showing
Solution:
1. Check browser console for errors
2. Verify data structure in DevTools
3. Check component props are being passed
```

### CORS Error
```
Problem: Cross-origin request blocked
Solution: OpenWeatherMap CORS is enabled
         (This shouldn't happen in production)
```

## Testing Checklist

- [ ] API key is valid and activated
- [ ] Requests show in Network tab
- [ ] Response status is 200
- [ ] Response data is complete
- [ ] Data displays correctly formatted
- [ ] Error messages show for invalid cities
- [ ] Loading state animates during requests
- [ ] Forecast data includes 5 days
- [ ] Weather icons load from CDN
- [ ] Responsive design works on all screens

## Future Enhancements

1. **Caching Layer**
   - Store recent searches
   - Reduce API calls
   - Improve speed

2. **Location Services**
   - Geolocation API
   - Auto-detect user location
   - One-click weather for current location

3. **Historical Data**
   - Show weather trends
   - Compare with previous years
   - Weather patterns

4. **Multiple Cities**
   - Add to favorites
   - Quick switch between cities
   - Comparison view

5. **Advanced Features**
   - Hourly forecast
   - Air quality index
   - Weather alerts
   - UV index

## Resources

- [OpenWeatherMap API Docs](https://openweathermap.org/api)
- [API Call Examples](https://openweathermap.org/weather-conditions)
- [Icon Codes](https://openweathermap.org/weather-conditions)
- [API Status](https://status.openweathermap.org)

---

**API Integration Documentation v1.0** ✅
