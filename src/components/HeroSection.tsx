
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThermometerSnowflake, ThermometerSun } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'hot' | 'cold'>('cold');
  const [isAnimating, setIsAnimating] = useState(false);

  // Toggle between hot and cold modes every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveMode(prev => prev === 'hot' ? 'cold' : 'hot');
        setIsAnimating(false);
      }, 500);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handleModeClick = (mode: 'hot' | 'cold') => {
    if (mode === activeMode) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveMode(mode);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-blue via-dark-gray to-black z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl transition-all duration-500 ${
          activeMode === 'cold' ? 'bg-cool-blue/10 animate-pulse' : 'bg-cool-blue/0'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl transition-all duration-500 ${
          activeMode === 'hot' ? 'bg-warm-red/10 animate-pulse' : 'bg-warm-red/0'
        }`}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white neon-glow">Control The</span>
              <span className="bg-gradient-to-r from-cool-blue to-warm-red bg-clip-text text-transparent block mt-2">
                Perfect Temp
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              Revolutionary cups that both <span className="text-cool-blue font-semibold">freeze</span> and <span className="text-warm-red font-semibold">heat up</span> your drinks. Made-to-order for your unique style.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-cool-blue to-warm-red hover:opacity-90 transition-opacity"
                onClick={() => document.getElementById('design')?.scrollIntoView({ behavior: 'smooth' })}>
                Design Your Cup
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 hover:bg-gray-800 text-white">
                Learn More
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center md:justify-start">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-cool-blue/20 border border-cool-blue/30 flex items-center justify-center text-xs text-white">JD</div>
                <div className="w-8 h-8 rounded-full bg-warm-red/20 border border-warm-red/30 flex items-center justify-center text-xs text-white">KM</div>
                <div className="w-8 h-8 rounded-full bg-neon-purple/20 border border-neon-purple/30 flex items-center justify-center text-xs text-white">AS</div>
              </div>
              <p className="ml-4 text-sm text-gray-400">
                Join <span className="font-semibold text-white">500+</span> early adopters
              </p>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-cool-blue/10 to-warm-red/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
            
            {/* Interactive Cup Visualization */}
            <div className="relative">
              {/* Cup container with transition effect */}
              <div className={`transition-all duration-500 transform ${isAnimating ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}`}>
                {/* Cup image */}
                <img 
                  src={activeMode === 'cold' 
                    ? "https://images.unsplash.com/photo-1536935338788-846bb9981813" 
                    : "https://images.unsplash.com/photo-1577968897966-3d4325b36b61"}
                  alt="TempCup - Temperature controlling cup" 
                  className="w-full max-w-md mx-auto rounded-lg drop-shadow-xl relative z-10"
                />
                
                {/* Overlays for hot/cold effects */}
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  activeMode === 'cold' ? 'from-cool-blue/30 to-transparent' : 'from-warm-red/30 to-transparent'
                } rounded-lg z-20 transition-opacity duration-500`}></div>
              </div>
              
              {/* Mode Selection Buttons */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-6 z-30">
                <button 
                  className={`frost-glass p-3 rounded-full flex items-center justify-center transition-all ${
                    activeMode === 'cold' ? 'bg-cool-blue/20 scale-110' : 'bg-white/5 hover:bg-white/10'
                  }`}
                  onClick={() => handleModeClick('cold')}
                >
                  <ThermometerSnowflake size={24} className={`${activeMode === 'cold' ? 'text-cool-blue' : 'text-white'}`} />
                </button>
                <button 
                  className={`frost-glass p-3 rounded-full flex items-center justify-center transition-all ${
                    activeMode === 'hot' ? 'bg-warm-red/20 scale-110' : 'bg-white/5 hover:bg-white/10'
                  }`}
                  onClick={() => handleModeClick('hot')}
                >
                  <ThermometerSun size={24} className={`${activeMode === 'hot' ? 'text-warm-red' : 'text-white'}`} />
                </button>
              </div>
              
              {/* Temperature indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-6 z-20">
                <div className={`frost-glass p-2 flex items-center gap-2 transition-all ${
                  activeMode === 'cold' ? 'opacity-100' : 'opacity-0'
                }`}>
                  <ThermometerSnowflake size={20} className="text-cool-blue" />
                  <span className="text-xs text-white">-15°C</span>
                </div>
                <div className={`frost-glass p-2 flex items-center gap-2 transition-all ${
                  activeMode === 'hot' ? 'opacity-100' : 'opacity-0'
                }`}>
                  <ThermometerSun size={20} className="text-warm-red" />
                  <span className="text-xs text-white">+75°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

