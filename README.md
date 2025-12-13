# 🌤️ WeatherApp - Modern React Weather Application

A stunning, fully responsive weather application built with React, Tailwind CSS, and OpenWeatherMap API. Get real-time weather data and 5-day forecasts for any city in the world.

## 🎨 Features

✨ **Modern, Responsive Design**
- Beautiful gradient backgrounds and smooth animations
- Fully responsive layout (mobile, tablet, desktop)
- Smooth hover effects and transitions
- Loading states with animated spinners

📊 **Comprehensive Weather Data**
- Real-time weather information
- Temperature, feels-like temperature, and temperature range
- Humidity, wind speed, and pressure
- Cloud coverage and visibility
- 5-day weather forecast

🎯 **User-Friendly Interface**
- Centralized search bar in header
- Large featured weather card
- Grid of forecast cards
- Clean error messages
- Loading animations

## 📦 Tech Stack

- **React 18**: Modern UI library with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and dev server
- **Axios**: HTTP client for API calls
- **OpenWeatherMap API**: Real-time weather data

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ and npm installed
- OpenWeatherMap API key (free tier available)

### Installation Steps

1. **Navigate to project directory:**
```bash
cd /Users/brunokago/Desktop/Projects/WetherApp
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up API key:**
   - Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)
   - Create a `.env` file in the project root (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```
   - Add your API key:
   ```
   VITE_OPENWEATHERMAP_API_KEY=your_api_key_here
   ```

4. **Start the development server:**
```bash
npm run dev
```

5. **Open in browser:**
   - The app will automatically open at `http://localhost:3000`
   - If not, manually navigate to that URL

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder, ready to deploy.

## 📁 Project Structure

```
WetherApp/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx     # Search bar and title
│   │   ├── WeatherCard.jsx    # Main weather display
│   │   ├── ForecastCard.jsx   # Individual forecast card
│   │   ├── ForecastSection.jsx    # Forecast grid
│   │   └── Footer.jsx     # Footer with branding
│   ├── services/
│   │   └── weatherApi.js  # API integration & utilities
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # React DOM entry point
│   └── index.css          # Global styles & animations
├── index.html             # HTML template
├── package.json           # Dependencies & scripts
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── vite.config.js         # Vite configuration
├── .env.example           # Environment variables template
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## 🧩 Component Overview

### Header
- App title and branding
- Centralized search bar for city lookup
- Loading state indicator
- Sticky positioning for easy access

### WeatherCard
- Main featured weather display
- Large temperature display with weather icon
- 6 info cards showing humidity, wind, pressure, etc.
- Decorative background elements
- Responsive grid layout

### ForecastSection & ForecastCard
- 5-day forecast display
- Cards show daily high/low temperatures
- Weather icons and descriptions
- Rain probability information
- Responsive grid (2 columns on mobile, 5 on desktop)

### Footer
- Company branding
- Feature highlights
- Data source attribution
- Links to OpenWeatherMap

## 🎨 Design Highlights

- **Color Scheme**: Blue gradient header/footer with soft blue backgrounds
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**:
  - Fade-in effect when weather data loads
  - Slide-up animation for cards
  - Shimmer effect during loading
  - Smooth hover scale on forecast cards
- **Spacing**: Generous padding and margins for readability
- **Shadows**: Soft, layered shadows for depth

## 🔌 API Integration

The app uses the **OpenWeatherMap API** (free tier):

- **Current Weather Endpoint**: Gets real-time weather data
- **5-Day Forecast Endpoint**: Provides daily forecasts
- **Units**: Metric (Celsius, m/s)
- **Error Handling**: User-friendly messages for invalid cities

### API Response Processing
- Current weather data extracted to display main information
- Forecast data grouped by day for cleaner presentation
- Weather icons fetched from OpenWeatherMap CDN

## 🌐 Responsive Design

- **Mobile** (< 768px): Single column layout, optimized spacing
- **Tablet** (768px - 1024px): 2-column forecast grid
- **Desktop** (> 1024px): Full 5-column forecast grid, wider main card

## ⚙️ Environment Variables

Create a `.env` file with:

```
VITE_OPENWEATHERMAP_API_KEY=your_api_key_here
```

**Important**: Never commit `.env` to version control. Use `.env.example` as a template.

## 🐛 Troubleshooting

**Issue: "City not found" error**
- Ensure you're spelling the city name correctly
- Try entering just the city name without country code
- Example: Search for "Paris" not "Paris, France"

**Issue: API key errors**
- Verify your API key is correct in `.env`
- Check that your OpenWeatherMap account is active
- Ensure you've activated the free tier API access

**Issue: App not opening**
- Confirm Node.js is installed: `node --version`
- Check if port 3000 is available
- Try running `npm install` again
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

## 📈 Performance Optimization

- Lazy component loading with React.lazy (optional enhancement)
- Debounced API calls to prevent excessive requests
- Efficient state management with React hooks
- Optimized re-renders with proper dependency arrays
- CSS-in-JS styling with Tailwind for minimal bundle size

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages
Update `vite.config.js` with your repository name, build, and push to GitHub.

## 📝 Code Quality

- Clean, readable code with comments
- Functional React components with hooks
- Proper error handling
- Responsive design best practices
- Accessibility considerations

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

## 📄 License

This project is open source and available for personal and commercial use.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) - Weather data
- [React](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vite](https://vitejs.dev/) - Build tool

## 📧 Support

For issues or questions, please create an issue in the repository.

---

**Happy weather tracking! 🌦️**
