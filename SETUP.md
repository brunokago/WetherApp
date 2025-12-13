# 🔧 WeatherApp Configuration & Setup Guide

## Step-by-Step Setup Instructions

### 1️⃣ Get OpenWeatherMap API Key

**Free Tier Available!**

1. Visit [OpenWeatherMap API](https://openweathermap.org/api)
2. Click "Sign Up" and create a free account
3. Verify your email
4. Go to API Keys section
5. Copy your default API key
6. Wait 10 minutes for activation (free tier)

### 2️⃣ Clone/Navigate to Project

```bash
cd /Users/brunokago/Desktop/Projects/WetherApp
```

### 3️⃣ Install Dependencies

```bash
npm install
```

This will install:
- **react** & **react-dom**: UI framework
- **axios**: HTTP client for API requests
- **tailwindcss**: CSS framework
- **vite**: Build tool
- And development dependencies

### 4️⃣ Configure Environment Variables

**Option A: Manual Setup**

1. In project root, create `.env` file:
```bash
touch .env
```

2. Add your API key:
```
VITE_OPENWEATHERMAP_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual OpenWeatherMap API key.

**Option B: Using Provided Script**

```bash
bash setup.sh
```

### 5️⃣ Start Development Server

```bash
npm run dev
```

The app will:
- Start on `http://localhost:3000`
- Auto-reload when files change
- Show build errors in terminal

### 6️⃣ Use the App

1. Open `http://localhost:3000`
2. Search for any city name
3. View current weather and 5-day forecast

---

## 📦 Available npm Commands

```bash
# Development
npm run dev        # Start dev server with hot reload

# Production
npm run build      # Create optimized production build

# Preview
npm run preview    # Preview production build locally
```

---

## 🗂️ Project Structure Explained

```
src/
├── components/
│   ├── Header.jsx          # Search & title (sticky header)
│   ├── WeatherCard.jsx     # Main weather display card
│   ├── ForecastCard.jsx    # Single day forecast card
│   ├── ForecastSection.jsx # 5-day forecast grid
│   └── Footer.jsx          # Footer with branding
│
├── services/
│   └── weatherApi.js       # API calls & helpers
│
├── App.jsx                 # Main app orchestration
├── main.jsx                # React entry point
└── index.css               # Global styles & animations
```

### Key Files Explained

**App.jsx** - Main component that:
- Manages state (weather, forecast, loading, error)
- Handles API calls
- Passes data to child components
- Manages search functionality

**weatherApi.js** - Utility functions:
- `getCurrentWeather(city)` - Fetches current weather
- `getForecast(city)` - Fetches 5-day forecast
- Helper functions for date/time formatting
- Error handling

**Components** - Presentational components:
- Receive data as props
- Display UI
- Handle user interactions
- No business logic

---

## 🎨 Tailwind CSS Customization

Edit `tailwind.config.js` to customize:
- Colors
- Font sizes
- Spacing
- Animations
- Responsive breakpoints

Example:
```javascript
theme: {
  extend: {
    colors: {
      'custom-blue': '#1e40af',
    },
  },
},
```

---

## 🐛 Troubleshooting

### "Cannot find module 'react'"
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use
```bash
# Change port in vite.config.js
server: {
  port: 3001,  // or any available port
}
```

### API key not working
1. Verify key is in `.env` file
2. Check file is named `.env` (not `.env.example`)
3. Wait 10+ minutes after creating key (activation time)
4. Restart dev server after changing `.env`

### City search returns "not found"
- Check spelling (case-insensitive, but spelling matters)
- Try city name only (not "City, Country")
- Some very small cities may not be in database

### Styling looks broken
```bash
# Rebuild Tailwind CSS
npm run dev  # This rebuilds automatically
```

---

## 📱 Responsive Design

The app is fully responsive:

**Mobile** (< 640px)
- Single column layout
- 2-column forecast grid
- Adjusted font sizes
- Optimized touch targets

**Tablet** (640px - 1024px)
- 2-column forecast grid
- Balanced spacing
- Medium font sizes

**Desktop** (> 1024px)
- Full 5-column forecast grid
- Large spacing
- Optimized for mouse interaction

Test responsiveness:
- Chrome DevTools: Cmd+Shift+M
- Resize browser window
- Test on actual devices

---

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload 'dist' folder to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload 'dist' folder to your server
```

---

## 💡 Performance Tips

1. **Image Optimization**: Weather icons are already optimized
2. **Code Splitting**: Components are small and efficient
3. **CSS**: Tailwind purges unused styles in production
4. **API Calls**: Debounced search to prevent excessive calls

---

## 🔒 Security

- Never commit `.env` file to git
- API key is only used on frontend (free tier limitation)
- For production, use backend proxy for API calls

---

## 📚 Learning Resources

- [React Hooks](https://react.dev/reference/react)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [OpenWeatherMap API](https://openweathermap.org/api)

---

## ✅ Checklist for First Run

- [ ] Node.js installed
- [ ] Project folder open in terminal
- [ ] `npm install` completed
- [ ] `.env` file created with API key
- [ ] `npm run dev` running
- [ ] Browser showing app at localhost:3000
- [ ] Can search for a city
- [ ] Weather data displays
- [ ] 5-day forecast shows

---

**Ready to use! Happy coding! 🎉**
