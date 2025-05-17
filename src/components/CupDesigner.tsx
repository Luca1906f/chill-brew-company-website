
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Palette, Thermometer, ThermometerSnowflake, ThermometerSun } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const cupColors = [
  { name: 'Midnight Black', value: 'bg-black' },
  { name: 'Arctic White', value: 'bg-white' },
  { name: 'Electric Blue', value: 'bg-cool-blue' },
  { name: 'Lava Red', value: 'bg-warm-red' },
  { name: 'Neon Purple', value: 'bg-neon-purple' },
];

const lidColors = [
  { name: 'Midnight Black', value: 'bg-black' },
  { name: 'Arctic White', value: 'bg-white' },
  { name: 'Electric Blue', value: 'bg-cool-blue' },
  { name: 'Lava Red', value: 'bg-warm-red' },
];

const CupDesigner: React.FC = () => {
  const [cupColor, setCupColor] = useState(cupColors[0]);
  const [lidColor, setLidColor] = useState(lidColors[0]);
  const [mode, setMode] = useState<'cool' | 'heat' | null>(null);
  const { toast } = useToast();

  const handleSaveDesign = () => {
    toast({
      title: "Design Saved!",
      description: "Your custom TempCup has been added to cart.",
    });
  };

  return (
    <section id="design" className="py-16 md:py-24 bg-dark-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="gradient-text">Design Your TempCup</span>
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Express yourself with a custom TempCup that perfectly matches your style, while keeping your drinks at the ideal temperature.
          </p>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Cup Preview */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                {/* Cup Body */}
                <div className={`w-64 h-80 rounded-b-3xl rounded-t-lg ${cupColor.value} relative overflow-hidden`}>
                  {/* Mode Indicator */}
                  {mode === 'cool' && (
                    <div className="absolute inset-0 bg-gradient-to-b from-cool-blue/20 to-cool-blue/5 animate-pulse-slow">
                      <div className="w-full h-full flex items-center justify-center">
                        <ThermometerSnowflake size={64} className="text-cool-blue/40" />
                      </div>
                    </div>
                  )}
                  {mode === 'heat' && (
                    <div className="absolute inset-0 bg-gradient-to-b from-warm-red/20 to-warm-red/5 animate-pulse-slow">
                      <div className="w-full h-full flex items-center justify-center">
                        <ThermometerSun size={64} className="text-warm-red/40" />
                      </div>
                    </div>
                  )}
                  
                  {/* Lid */}
                  <div className={`absolute top-0 left-0 right-0 h-16 ${lidColor.value} rounded-t-lg`}>
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-4 bg-black/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customization Options */}
            <div className="w-full lg:w-1/2 frost-glass p-6">
              <h3 className="text-xl font-semibold mb-6">Customize Your Cup</h3>

              {/* Cup Color Selection */}
              <div className="mb-6">
                <label className="block text-gray-300 mb-2 flex items-center">
                  <Palette size={18} className="mr-2" />
                  Cup Color
                </label>
                <div className="flex flex-wrap gap-3">
                  {cupColors.map((color) => (
                    <button
                      key={color.name}
                      className={`w-8 h-8 rounded-full ${color.value} border-2 ${
                        cupColor.name === color.name ? 'border-white' : 'border-transparent'
                      }`}
                      title={color.name}
                      onClick={() => setCupColor(color)}
                    />
                  ))}
                </div>
              </div>

              {/* Lid Color Selection */}
              <div className="mb-6">
                <label className="block text-gray-300 mb-2 flex items-center">
                  <Palette size={18} className="mr-2" />
                  Lid Color
                </label>
                <div className="flex flex-wrap gap-3">
                  {lidColors.map((color) => (
                    <button
                      key={color.name}
                      className={`w-8 h-8 rounded-full ${color.value} border-2 ${
                        lidColor.name === color.name ? 'border-white' : 'border-transparent'
                      }`}
                      title={color.name}
                      onClick={() => setLidColor(color)}
                    />
                  ))}
                </div>
              </div>

              {/* Temperature Mode */}
              <div className="mb-8">
                <label className="block text-gray-300 mb-2 flex items-center">
                  <Thermometer size={18} className="mr-2" />
                  Temperature Mode
                </label>
                <div className="flex gap-4">
                  <Button 
                    variant={mode === 'cool' ? 'default' : 'outline'} 
                    onClick={() => setMode('cool')}
                    className={mode === 'cool' ? 'bg-cool-blue text-white' : 'text-cool-blue border-cool-blue/50'}
                  >
                    <ThermometerSnowflake size={16} className="mr-2" />
                    Cooling
                  </Button>
                  <Button 
                    variant={mode === 'heat' ? 'default' : 'outline'} 
                    onClick={() => setMode('heat')}
                    className={mode === 'heat' ? 'bg-warm-red text-white' : 'text-warm-red border-warm-red/50'}
                  >
                    <ThermometerSun size={16} className="mr-2" />
                    Heating
                  </Button>
                </div>
              </div>

              <Button onClick={handleSaveDesign} className="w-full bg-gradient-to-r from-cool-blue to-warm-red hover:opacity-90 transition-opacity">
                Add To Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CupDesigner;
