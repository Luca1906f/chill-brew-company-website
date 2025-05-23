
import React from 'react';
import { ThermometerSnowflake, ThermometerSun, BatteryFull, Smartphone } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-dark-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">How TempCup Works</h2>
          <p className="text-lg text-gray-300">
            Our innovative technology makes it simple to enjoy your drink at the perfect temperature, whether hot or cold.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="bg-dark-gray frost-glass p-6 rounded-xl text-center">
            <div className="mb-4 w-16 h-16 mx-auto bg-cool-blue/10 rounded-full flex items-center justify-center">
              <Smartphone size={32} className="text-cool-blue" />
            </div>
            <h3 className="font-semibold mb-2 text-white">Connect App</h3>
            <p className="text-gray-400 text-sm">Pair your TempCup with our mobile app via Bluetooth.</p>
          </div>
          
          <div className="bg-dark-gray frost-glass p-6 rounded-xl text-center">
            <div className="mb-4 w-16 h-16 mx-auto bg-warm-red/10 rounded-full flex items-center justify-center">
              <BatteryFull size={32} className="text-warm-red" />
            </div>
            <h3 className="font-semibold mb-2 text-white">Power Up</h3>
            <p className="text-gray-400 text-sm">Charge your cup with the wireless charging base.</p>
          </div>
          
          <div className="bg-dark-gray frost-glass p-6 rounded-xl text-center">
            <div className="mb-4 w-16 h-16 mx-auto bg-cool-blue/10 rounded-full flex items-center justify-center">
              <ThermometerSnowflake size={32} className="text-cool-blue" />
            </div>
            <h3 className="font-semibold mb-2 text-white">Cool Down</h3>
            <p className="text-gray-400 text-sm">Choose cooling mode to keep your drinks cold for up to 8 hours.</p>
          </div>
          
          <div className="bg-dark-gray frost-glass p-6 rounded-xl text-center">
            <div className="mb-4 w-16 h-16 mx-auto bg-warm-red/10 rounded-full flex items-center justify-center">
              <ThermometerSun size={32} className="text-warm-red" />
            </div>
            <h3 className="font-semibold mb-2 text-white">Heat Up</h3>
            <p className="text-gray-400 text-sm">Select heating mode to maintain perfect hot beverage temperature.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
