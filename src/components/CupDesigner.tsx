
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Palette, Sliders, Circle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const cupColors = [
  { name: 'Midnight Black', value: 'bg-black', textColor: 'text-white' },
  { name: 'Arctic White', value: 'bg-white', textColor: 'text-black' },
  { name: 'Electric Blue', value: 'bg-cool-blue', textColor: 'text-white' },
  { name: 'Lava Red', value: 'bg-warm-red', textColor: 'text-white' },
  { name: 'Neon Purple', value: 'bg-neon-purple', textColor: 'text-white' },
  { name: 'Emerald Green', value: 'bg-emerald-500', textColor: 'text-white' },
];

const lidColors = [
  { name: 'Midnight Black', value: 'bg-black' },
  { name: 'Arctic White', value: 'bg-white' },
  { name: 'Electric Blue', value: 'bg-cool-blue' },
  { name: 'Lava Red', value: 'bg-warm-red' },
  { name: 'Neon Purple', value: 'bg-neon-purple' },
];

const cupPatterns = [
  { name: 'None', value: '' },
  { name: 'Dotted', value: 'bg-dotted' },
  { name: 'Grid', value: 'bg-grid' },
  { name: 'Wave', value: 'bg-wave' },
];

const CupDesigner: React.FC = () => {
  const [cupColor, setCupColor] = useState(cupColors[0]);
  const [lidColor, setLidColor] = useState(lidColors[0]);
  const [pattern, setPattern] = useState(cupPatterns[0]);
  const [temperature, setTemperature] = useState(25);
  const [mode, setMode] = useState<'cool' | 'heat' | null>(null);
  const [addLogo, setAddLogo] = useState(false);
  const [rotation, setRotation] = useState(0);
  const { toast } = useToast();

  const handleSaveDesign = () => {
    toast({
      title: "Design Saved!",
      description: `Your custom TempCup in ${cupColor.name} with ${lidColor.name} lid has been added to cart.`,
    });
  };

  const modeClass = mode === 'cool' ? 'from-cool-blue/20 to-cool-blue/5' : 
                    mode === 'heat' ? 'from-warm-red/20 to-warm-red/5' : '';

  const temperatureText = mode === 'cool' ? 
    `${Math.round(-15 + (temperature / 100) * 10)}°C` : 
    mode === 'heat' ? 
    `${Math.round(40 + (temperature / 100) * 35)}°C` : '25°C';
  
  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  return (
    <section id="design" className="py-16 md:py-24 bg-dark-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="gradient-text">Design Your TempCup</span>
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Customize every aspect of your perfect cup. From color to temperature settings, make it uniquely yours.
          </p>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Cup Preview */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                {/* 3D Cup View with rotation */}
                <div 
                  className="relative transition-all duration-500" 
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  {/* Cup Body */}
                  <div className={`relative w-64 h-80 rounded-b-3xl rounded-t-lg ${cupColor.value} overflow-hidden transition-all duration-300`}>
                    {/* Pattern Overlay */}
                    {pattern.value && (
                      <div className={`absolute inset-0 opacity-10 ${pattern.value}`}></div>
                    )}
                    
                    {/* Mode Indicator */}
                    {mode && (
                      <div className={`absolute inset-0 bg-gradient-to-b ${modeClass} animate-pulse-slow`}>
                        <div className="w-full h-full flex items-center justify-center">
                          <div className={`text-6xl font-bold ${cupColor.textColor} opacity-10`}>
                            {temperatureText}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Custom Logo */}
                    {addLogo && (
                      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full w-16 h-16 flex items-center justify-center">
                        <p className={`text-xs ${cupColor.textColor}`}>YOUR LOGO</p>
                      </div>
                    )}
                    
                    {/* Lid */}
                    <div className={`absolute top-0 left-0 right-0 h-16 ${lidColor.value} rounded-t-lg transition-all duration-300`}>
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-4 bg-black/20 rounded-full"></div>
                    </div>

                    {/* Temperature Display */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 frost-glass px-3 py-1 rounded-full">
                      <span className="text-xs text-white">{temperatureText}</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Controls */}
                <div className="mt-8 flex justify-center gap-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleRotate}
                    className="text-gray-300"
                  >
                    Rotate Cup
                  </Button>
                  
                  <Button 
                    variant={addLogo ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setAddLogo(!addLogo)}
                    className={addLogo ? "bg-cool-blue text-white" : "text-gray-300"}
                  >
                    {addLogo ? "Remove Logo" : "Add Logo"}
                  </Button>
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
                      } hover:scale-110 transition-transform`}
                      title={color.name}
                      onClick={() => setCupColor(color)}
                    />
                  ))}
                </div>
              </div>

              {/* Lid Color Selection */}
              <div className="mb-6">
                <label className="block text-gray-300 mb-2 flex items-center">
                  <Circle size={18} className="mr-2" />
                  Lid Color
                </label>
                <div className="flex flex-wrap gap-3">
                  {lidColors.map((color) => (
                    <button
                      key={color.name}
                      className={`w-8 h-8 rounded-full ${color.value} border-2 ${
                        lidColor.name === color.name ? 'border-white' : 'border-transparent'
                      } hover:scale-110 transition-transform`}
                      title={color.name}
                      onClick={() => setLidColor(color)}
                    />
                  ))}
                </div>
              </div>

              {/* Pattern Selection */}
              <div className="mb-6">
                <label className="block text-gray-300 mb-2">Pattern</label>
                <div className="flex flex-wrap gap-2">
                  {cupPatterns.map((p) => (
                    <button
                      key={p.name}
                      onClick={() => setPattern(p)}
                      className={`px-3 py-1 rounded-md ${
                        pattern.name === p.name 
                          ? 'bg-cool-blue text-white' 
                          : 'bg-dark-blue text-gray-300'
                      } hover:bg-opacity-80 transition-colors`}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Temperature Mode */}
              <div className="mb-6">
                <label className="block text-gray-300 mb-2 flex items-center">
                  <Sliders size={18} className="mr-2" />
                  Temperature Mode
                </label>
                <div className="flex gap-4">
                  <Button 
                    variant={mode === 'cool' ? 'default' : 'outline'} 
                    onClick={() => setMode('cool')}
                    className={mode === 'cool' ? 'bg-cool-blue text-white' : 'text-cool-blue border-cool-blue/50'}
                  >
                    Cooling
                  </Button>
                  <Button 
                    variant={mode === 'heat' ? 'default' : 'outline'} 
                    onClick={() => setMode('heat')}
                    className={mode === 'heat' ? 'bg-warm-red text-white' : 'text-warm-red border-warm-red/50'}
                  >
                    Heating
                  </Button>
                </div>
              </div>

              {/* Temperature Slider */}
              {mode && (
                <div className="mb-6 animate-fade-in">
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-gray-300">Temperature</label>
                    <span className="text-white font-medium">{temperatureText}</span>
                  </div>
                  <Slider
                    defaultValue={[25]}
                    max={100}
                    step={1}
                    value={[temperature]}
                    onValueChange={(vals) => setTemperature(vals[0])}
                    className={mode === 'cool' ? 'bg-cool-blue/20' : 'bg-warm-red/20'}
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>{mode === 'cool' ? '-15°C' : '40°C'}</span>
                    <span>{mode === 'cool' ? '-5°C' : '75°C'}</span>
                  </div>
                </div>
              )}

              {/* Smart Features Toggle */}
              <div className="mb-8">
                <div className="flex items-center space-x-2">
                  <Switch id="smart-features" />
                  <Label htmlFor="smart-features" className="text-gray-300">Enable Smart Features</Label>
                </div>
                <p className="text-xs text-gray-400 mt-1">Control your cup temperature from your smartphone</p>
              </div>

              <Button 
                onClick={handleSaveDesign} 
                className="w-full bg-gradient-to-r from-cool-blue to-warm-red hover:opacity-90 transition-opacity"
              >
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

