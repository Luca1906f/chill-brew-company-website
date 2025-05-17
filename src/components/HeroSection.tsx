
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Perfect Temperature,
              <span className="bg-gradient-to-r from-cool-blue to-warm-red bg-clip-text text-transparent block mt-2">
                Every Sip
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Revolutionary cups that both <span className="text-cool-blue font-semibold">freeze</span> and <span className="text-warm-red font-semibold">heat up</span> your drinks. Temperature control at your fingertips.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-cool-blue to-warm-red hover:opacity-90 transition-opacity">
                Pre-Order Now
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50">
                Learn More
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center md:justify-start">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">JD</div>
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs">KM</div>
                <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-xs">AS</div>
              </div>
              <p className="ml-4 text-sm text-gray-600">
                Join <span className="font-semibold">500+</span> early adopters
              </p>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-cool-blue/10 to-warm-red/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
              alt="TempCup - Temperature controlling cup" 
              className="w-full max-w-md mx-auto drop-shadow-xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
