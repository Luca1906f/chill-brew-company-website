
import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Palette, Video } from 'lucide-react';

const storyContent = [
  {
    title: "Der Ursprung",
    content: "TempCup wurde aus der Frustration geboren, dass unsere Getränke nie die richtige Temperatur hatten. 2023 begannen wir an einer Lösung zu arbeiten – einen Becher, der sowohl kühlen als auch wärmen kann.",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  },
  {
    title: "Design für die Gen Z",
    content: "Wir haben mit über 200 jungen Menschen zusammengearbeitet, um ein Design zu entwickeln, das sich perfekt an die Bedürfnisse und den Stil der neuen Generation anpasst.",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
  },
  {
    title: "Technologie trifft Nachhaltigkeit",
    content: "Unsere patentierte Temperatur-Technologie nutzt recycelte Materialien und ist so konzipiert, dass sie jahrelang hält – ein Schritt weg von der Wegwerfkultur.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
  },
  {
    title: "Made-to-Order Philosophie",
    content: "Jeder TempCup wird erst nach deiner Bestellung hergestellt. Das reduziert Überschuss und Abfall und gibt dir ein einzigartiges Produkt, das genau deinen Wünschen entspricht.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
  }
];

const LookbookSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'story' | 'inspiration'>('story');

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="gradient-text">TempCup Story</span>
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Entdecke die Geschichte hinter unserer Marke und wie wir die Welt der Getränke revolutionieren.
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="frost-glass rounded-full p-1 flex">
            <button
              onClick={() => setActiveTab('story')}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === 'story' ? 'bg-white/10 text-white' : 'text-gray-400'
              }`}
            >
              Unsere Geschichte
            </button>
            <button
              onClick={() => setActiveTab('inspiration')}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === 'inspiration' ? 'bg-white/10 text-white' : 'text-gray-400'
              }`}
            >
              Design Inspiration
            </button>
          </div>
        </div>

        {/* Story Content */}
        {activeTab === 'story' && (
          <Carousel className="w-full">
            <CarouselContent>
              {storyContent.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col md:flex-row gap-6 frost-glass p-6 rounded-lg">
                    <div className="flex-1">
                      <img 
                        src={item.image}
                        alt={item.title} 
                        className="rounded-lg object-cover w-full h-64 md:h-full"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                      <p className="text-gray-300">{item.content}</p>
                      
                      <div className="mt-6">
                        <div className="text-sm text-gray-400">
                          Kapitel {index + 1} von {storyContent.length}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-4">
              <CarouselPrevious className="relative static md:absolute" />
              <CarouselNext className="relative static md:absolute" />
            </div>
          </Carousel>
        )}

        {/* Inspiration Gallery */}
        {activeTab === 'inspiration' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="frost-glass p-4 rounded-lg overflow-hidden group">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1577968897966-3d4325b36b61" 
                  alt="Design Inspiration" 
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-semibold mb-1">Minimalismus</h4>
                    <p className="text-sm">Klare Linien, elegantes Design</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="frost-glass p-4 rounded-lg overflow-hidden group">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1588802898709-344fa57a5e41" 
                  alt="Materials" 
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-semibold mb-1">Premium Materialien</h4>
                    <p className="text-sm">Nachhaltigkeit trifft Langlebigkeit</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="frost-glass p-4 rounded-lg overflow-hidden group">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e" 
                  alt="Technology" 
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-semibold mb-1">Smart Technologie</h4>
                    <p className="text-sm">Intuitive Steuerung für dein Getränk</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="frost-glass p-4 rounded-lg overflow-hidden group">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1536935338788-846bb9981813" 
                  alt="Colors" 
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-semibold mb-1">Farbpalette</h4>
                    <p className="text-sm">Lebendige Farben für jede Persönlichkeit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Button 
            onClick={() => document.getElementById('design')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-cool-blue to-warm-red hover:opacity-90 transition-opacity gap-2"
          >
            <Palette size={18} />
            Gestalte deinen eigenen TempCup
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LookbookSection;
