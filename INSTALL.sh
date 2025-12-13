#!/bin/bash

# WeatherApp Installation & Setup Guide
# Complete step-by-step instructions

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║     🌤️  WEATHERAPP - INSTALLATION & SETUP GUIDE  🌤️       ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check Node.js
echo "${BLUE}Step 1: Checking Node.js Installation${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if ! command -v node &> /dev/null; then
    echo -e "${RED}✗ Node.js is not installed${NC}"
    echo "  Download from: https://nodejs.org/"
    exit 1
else
    NODE_VERSION=$(node --version)
    NPM_VERSION=$(npm --version)
    echo -e "${GREEN}✓ Node.js ${NODE_VERSION}${NC}"
    echo -e "${GREEN}✓ npm ${NPM_VERSION}${NC}"
fi

echo ""
echo "${BLUE}Step 2: Project Information${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Project: WeatherApp"
echo "Location: $(pwd)"
echo "Type: React + Tailwind CSS"
echo "Status: Ready to install"

echo ""
echo "${BLUE}Step 3: What You'll Get${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✓ React application"
echo "✓ Tailwind CSS styling"
echo "✓ 5 React components"
echo "✓ OpenWeatherMap API integration"
echo "✓ Responsive design"
echo "✓ 7 documentation files"

echo ""
echo "${BLUE}Step 4: Installing Dependencies${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Running: npm install"
echo ""

npm install

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✓ Dependencies installed successfully!${NC}"
else
    echo -e "${RED}✗ Failed to install dependencies${NC}"
    exit 1
fi

echo ""
echo "${BLUE}Step 5: Environment Setup${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ ! -f .env ]; then
    echo "Creating .env file..."
    cp .env.example .env
    echo -e "${GREEN}✓ .env file created${NC}"
    echo ""
    echo "📝 IMPORTANT: Add your OpenWeatherMap API key"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "1. Visit: https://openweathermap.org/api"
    echo "2. Create a free account"
    echo "3. Get your API key"
    echo "4. Open: .env file in project root"
    echo "5. Replace: your_api_key_here with your actual key"
    echo ""
    echo "Example .env content:"
    echo "VITE_OPENWEATHERMAP_API_KEY=abc123xyz456"
else
    echo -e "${GREEN}✓ .env file already exists${NC}"
    if grep -q "your_api_key_here" .env; then
        echo -e "${YELLOW}⚠ API key needs to be updated in .env file${NC}"
    else
        echo -e "${GREEN}✓ API key appears to be configured${NC}"
    fi
fi

echo ""
echo "${BLUE}Step 6: Ready to Start!${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo -e "${GREEN}Installation Complete!${NC}"
echo ""
echo "Next steps:"
echo "───────────"
echo "1. Edit .env file and add your API key (if not done)"
echo ""
echo "   ${YELLOW}nano .env${NC}  or  ${YELLOW}open .env${NC}"
echo ""
echo "2. Start development server:"
echo ""
echo "   ${YELLOW}npm run dev${NC}"
echo ""
echo "3. Open in browser:"
echo ""
echo "   ${YELLOW}http://localhost:3000${NC}"
echo ""
echo "✨ Your weather app will open automatically!"
echo ""

echo "${BLUE}📚 Documentation Files${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "INDEX.md          - Complete resource index"
echo "PROJECT_SUMMARY.md - Overview & deployment"
echo "README.md         - Main documentation"
echo "SETUP.md          - Detailed setup guide"
echo "QUICKREF.md       - Quick reference"
echo "DESIGN.md         - Design system"
echo "API.md            - API integration guide"
echo "SNIPPETS.md       - Code customization examples"
echo ""

echo "${BLUE}Available npm Commands${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "npm run dev       - Start development server (hot reload)"
echo "npm run build     - Create production build"
echo "npm run preview   - Preview production build"
echo ""

echo "${GREEN}╔════════════════════════════════════════════════════════════╗"
echo "║  Ready to build something amazing! Happy coding! 🚀            ║"
echo "╚════════════════════════════════════════════════════════════╝${NC}"
echo ""
