'use client';

import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <header 
      className="bg-gradient-to-r from-blue-900 to-blue-800 text-white text-center py-12 px-4 relative overflow-hidden"
      role="banner"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Logo container with loading state */}
        <div className="relative mb-6">
          {imageLoading && !imageError && (
            <div className="mx-auto mb-4 w-80 h-32 bg-white/20 rounded-lg animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>
          )}
          
          {!imageError ? (
            <Image
              src="/logo.jpg"
              alt="Bluelakes Enterprises Limited - Professional Property Investment Company Logo"
              className={`mx-auto mb-4 rounded-lg shadow-lg transition-opacity duration-300 ${
                imageLoading ? 'opacity-0 absolute' : 'opacity-100'
              }`}
              onError={handleImageError}
              onLoad={handleImageLoad}
              loading="eager"
              width={320}  // Added required width
              height={128} // Added required height
              style={{ maxWidth: '320px', height: 'auto' }} // Maintain aspect ratio
            />
          ) : (
            <div className="mx-auto mb-4 w-80 h-32 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white/80 text-sm font-medium">Bluelakes Enterprises</span>
            </div>
          )}
        </div>

        {/* Main heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
          Bluelakes Enterprises Limited
        </h1>
        
        {/* Tagline */}
        <p className="text-lg md:text-xl font-medium text-blue-100 max-w-2xl mx-auto leading-relaxed">
          We Buy, Renovate, and Sell Properties
        </p>
        
        {/* Optional subtitle */}
        <p className="text-sm md:text-base text-blue-200 mt-2 font-light">
          Professional Property Investment & Development
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-blue-100 text-sm md:text-base">
              🏡 Professional Property Investment
            </div>
            <div className="hidden sm:block text-blue-200">•</div>
            <div className="text-blue-100 text-sm md:text-base">
              🔨 Expert Renovation Services  
            </div>
            <div className="hidden sm:block text-blue-200">•</div>
            <div className="text-blue-100 text-sm md:text-base">
              🏠 Quality Home Sales
            </div>
          </div>
      </div>
    </header>
  );
};

export default Header;