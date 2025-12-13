import React from 'react';

/**
 * Footer Component
 * Displays minimal branding and footer information
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-header text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-2">WeatherApp</h3>
            <p className="text-blue-100 text-sm">
              Your personal weather companion. Get accurate forecasts anytime, anywhere.
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-bold mb-3">Features</h3>
            <ul className="text-blue-100 text-sm space-y-1">
              <li>✓ Real-time weather data</li>
              <li>✓ 5-day forecast</li>
              <li>✓ Detailed weather info</li>
            </ul>
          </div>

          {/* Data Source */}
          <div>
            <h3 className="text-lg font-bold mb-2">Data Source</h3>
            <p className="text-blue-100 text-sm">
              Powered by{' '}
              <a
                href="https://openweathermap.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline font-semibold"
              >
                OpenWeatherMap
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 pt-6">
          <p className="text-center text-blue-100 text-sm">
            © {currentYear} WeatherApp. All rights reserved. | Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
