# ⚡ WeatherApp Quick Reference

## 🚀 5-Minute Setup

```bash
# 1. Navigate to project
cd /Users/brunokago/Desktop/Projects/WetherApp

# 2. Install dependencies
npm install

# 3. Create .env file
cp .env.example .env

# 4. Add API key to .env
# VITE_OPENWEATHERMAP_API_KEY=your_key_here

# 5. Start dev server
npm run dev

# 6. Open browser
# http://localhost:3000
```

## 📂 File Structure at a Glance

```
src/
├── components/
│   ├── Header.jsx       ← Search bar + title
│   ├── WeatherCard.jsx  ← Main display
│   ├── ForecastCard.jsx ← Single day card
│   ├── ForecastSection.jsx ← Forecast grid
│   └── Footer.jsx       ← Footer
├── services/
│   └── weatherApi.js    ← API calls
├── App.jsx              ← Main logic
├── main.jsx             ← Entry point
└── index.css            ← Global styles
```

## 🎨 Key Tailwind Classes

```css
/* Layout */
max-w-7xl, mx-auto, px-4, py-6, grid, flex

/* Colors */
bg-blue-600, text-gray-800, border-gray-200

/* Styling */
rounded-2xl, shadow-lg, hover:shadow-2xl

/* Animations */
animate-fadeIn, animate-slideUp, hover:scale-105

/* Responsive */
md:text-5xl, md:grid-cols-2, md:p-12
```

## 🔌 Component Props

### Header
```javascript
<Header onSearch={handleSearch} isLoading={loading} />
```

### WeatherCard
```javascript
<WeatherCard weather={weather} loading={loading} error={error} />
```

### ForecastSection
```javascript
<ForecastSection forecast={forecast} loading={loading} />
```

## 📡 API Functions

```javascript
import { getCurrentWeather, getForecast } from './services/weatherApi'

// Get current weather
const weather = await getCurrentWeather('London')

// Get 5-day forecast
const forecast = await getForecast('London')

// Format date
formatDate(1702012800) // "Dec 08"

// Get icon URL
getWeatherIconUrl('02d') // Full URL
```

## 🐛 Debugging Tips

```javascript
// In App.jsx to debug state
console.log('Weather:', weather)
console.log('Forecast:', forecast)
console.log('Error:', error)

// Browser DevTools
F12 → Console → See any errors
F12 → Network → Watch API calls
F12 → Elements → Inspect styling
```

## ⚙️ Common Customizations

### Change Header Color
```javascript
// In Header.jsx
className="gradient-header"  // Edit index.css
// OR
className="bg-indigo-600"
```

### Change Default City
```javascript
// In App.jsx
const [lastSearchedCity, setLastSearchedCity] = useState('New York')
```

### Adjust Card Styling
```javascript
// In WeatherCard.jsx
className="rounded-3xl p-8"
// Change rounded-3xl to rounded-xl, rounded-2xl, etc
// Change p-8 to p-4, p-6, p-12, etc
```

### Modify Forecast Grid
```javascript
// In ForecastSection.jsx
className="grid grid-cols-2 md:grid-cols-5 gap-4"
// Change grid-cols-2 to grid-cols-3
// Change md:grid-cols-5 to md:grid-cols-4
```

## 🔄 State Management

```javascript
// In App.jsx
const [weather, setWeather] = useState(null)        // Current weather
const [forecast, setForecast] = useState(null)      // 5-day forecast
const [loading, setLoading] = useState(false)       // Loading state
const [error, setError] = useState(null)            // Error message
const [lastSearchedCity, setLastSearchedCity] = useState('London')
```

## 🎯 User Flow

```
1. User opens app → Default city (London) loads
2. User types city → No immediate call
3. User presses Enter → Search triggered
4. Loading spinner shows → API call in progress
5. Data received → Weather displays
6. User sees forecast → 5 days displayed
7. Error? → User-friendly message shown
```

## 📊 Data Example

```javascript
// What weather object looks like
{
  name: "London",
  sys: { country: "GB" },
  main: {
    temp: 15.5,
    feels_like: 14.8,
    humidity: 72,
    pressure: 1013,
    temp_max: 17.1,
    temp_min: 13.2
  },
  weather: [{
    main: "Clouds",
    description: "few clouds",
    icon: "02d"
  }],
  wind: { speed: 4.5 },
  clouds: { all: 20 },
  visibility: 10000
}
```

## 🚨 Error Codes

| Error | Cause | Fix |
|-------|-------|-----|
| City not found | Invalid city name | Check spelling |
| 401 Unauthorized | Bad API key | Verify .env |
| 429 Too Many Requests | Rate limit | Wait 1 minute |
| Network error | No internet | Check connection |

## 📦 npm Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run preview  # Preview production build
```

## 🌐 Environment Setup

```bash
# Copy template
cp .env.example .env

# Edit .env with your API key
VITE_OPENWEATHERMAP_API_KEY=abc123xyz456

# Access in code
import.meta.env.VITE_OPENWEATHERMAP_API_KEY
```

## 🎬 Component Lifecycle

```
App Mounts
  ↓
useEffect runs → fetchWeatherData('London')
  ↓
setLoading(true) → Shows spinner
  ↓
API calls complete → setWeather(), setForecast()
  ↓
setLoading(false) → Shows data
  ↓
User searches → Same flow repeats
```

## 💡 Pro Tips

1. **Fast Refresh**: Dev server auto-reloads (no manual refresh)
2. **Console Errors**: Shows in terminal AND browser console
3. **Git Ignore**: .env is auto-ignored (don't commit!)
4. **Mobile Testing**: Use DevTools responsive mode
5. **Production Build**: Use `npm run build` before deploying

## 🔗 Useful Links

- [OpenWeatherMap API](https://openweathermap.org/api)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)

## ❓ Quick Help

**App won't start?**
→ `npm install` → Restart with `npm run dev`

**Styling looks broken?**
→ Check Tailwind classes are spelled correctly

**API not working?**
→ Verify API key in .env and browser Network tab

**Search not working?**
→ Ensure Enter key is pressed (form submission)

---

**Got stuck?** Check README.md or SETUP.md for detailed guides! 📚
