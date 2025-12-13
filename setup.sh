#!/bin/bash

# WeatherApp Setup Script
# This script automates the setup process for the WeatherApp

echo "🌤️  WeatherApp - Automated Setup"
echo "=================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 14+ first."
    echo "Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js is installed: $(node --version)"
echo "✅ npm is installed: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp .env.example .env
    echo "✅ .env file created!"
    echo ""
    echo "⚠️  Please add your OpenWeatherMap API key to .env file:"
    echo "   1. Get your free API key from: https://openweathermap.org/api"
    echo "   2. Open .env file and replace 'your_api_key_here' with your actual key"
    echo ""
else
    echo "✅ .env file already exists"
fi

echo ""
echo "🚀 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Add your OpenWeatherMap API key to the .env file"
echo "2. Run: npm run dev"
echo "3. Open http://localhost:3000 in your browser"
echo ""
