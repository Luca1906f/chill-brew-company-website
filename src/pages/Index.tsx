
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import CupDesigner from '@/components/CupDesigner';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ProductFeature from '@/components/ProductFeature';
import { ThermometerSnowflake, ThermometerSun, Battery, Clock, Shield, Palette, Video, BluetoothConnected, BatteryCharging } from 'lucide-react';
import LookbookSection from '@/components/LookbookSection';

const Index = () => {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Observe all feature items
    document.querySelectorAll('.feature-item').forEach(item => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-blue text-white">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <section id="features" className="py-16 md:py-24 bg-dark-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Revolutionary Features</h2>
              <p className="text-lg text-gray-300">
                TempCup combines advanced technology with sleek design to deliver the perfect temperature experience.
              </p>
            </div>
            
            <div className="grid gap-16 max-w-4xl mx-auto">
              <div className="feature-item opacity-0">
                <ProductFeature 
                  icon={<ThermometerSnowflake size={32} />} 
                  title="Cooling Technology" 
                  description="Keep your cold drinks perfectly chilled for up to 8 hours, no matter the outside temperature."
                  iconBackground="bg-gradient-to-br from-blue-400 to-cool-blue"
                  detailsContent={
                    <div className="space-y-4">
                      <p>Our proprietary cooling system maintains the ideal temperature between -15°C and -5°C without freezing. Perfect for smoothies, iced coffee, or water on hot summer days.</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-cool-blue">●</span>
                          <span className="text-sm">Precise temperature control</span>
                        </div>
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-cool-blue">●</span>
                          <span className="text-sm">No ice needed</span>
                        </div>
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-cool-blue">●</span>
                          <span className="text-sm">8+ hour battery life</span>
                        </div>
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-cool-blue">●</span>
                          <span className="text-sm">Anti-condensation exterior</span>
                        </div>
                      </div>
                    </div>
                  }
                />
              </div>
              
              <div className="feature-item opacity-0">
                <ProductFeature 
                  icon={<ThermometerSun size={32} />} 
                  title="Heating Control" 
                  description="Maintain your hot beverages at your preferred temperature for hours."
                  isReversed={true}
                  iconBackground="bg-gradient-to-br from-warm-red to-orange-400"
                  detailsContent={
                    <div className="space-y-4">
                      <p>Adjust the exact temperature via our companion app for the perfect sipping experience. Our heating technology ensures your coffee, tea, or hot chocolate stays at your preferred temperature from 40°C to 75°C.</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-warm-red">●</span>
                          <span className="text-sm">Adjustable temperature</span>
                        </div>
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-warm-red">●</span>
                          <span className="text-sm">Even heat distribution</span>
                        </div>
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-warm-red">●</span>
                          <span className="text-sm">Temperature memory</span>
                        </div>
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-warm-red">●</span>
                          <span className="text-sm">Safe touch exterior</span>
                        </div>
                      </div>
                    </div>
                  }
                />
              </div>
              
              <div className="feature-item opacity-0">
                <ProductFeature 
                  icon={<Battery size={32} />} 
                  title="All-Day Battery" 
                  description="A single charge powers TempCup for up to 24 hours. The wireless charging base makes recharging simple and convenient."
                  iconBackground="bg-gradient-to-br from-green-400 to-emerald-500"
                  detailsContent={
                    <div className="space-y-4">
                      <p>Our high-capacity lithium-ion battery ensures your beverage stays at the perfect temperature all day long. No more lukewarm coffee or melted ice!</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-emerald-400">●</span>
                          <span className="text-sm">24+ hour runtime</span>
                        </div>
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-emerald-400">●</span>
                          <span className="text-sm">Fast charging</span>
                        </div>
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-emerald-400">●</span>
                          <span className="text-sm">Battery level indicator</span>
                        </div>
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-emerald-400">●</span>
                          <span className="text-sm">Energy-efficient design</span>
                        </div>
                      </div>
                    </div>
                  }
                />
              </div>
              
              <div className="feature-item opacity-0">
                <ProductFeature 
                  icon={<BluetoothConnected size={32} />} 
                  title="Smart Bluetooth Connection" 
                  description="Control your cup's temperature precisely through our smartphone app with an easy Bluetooth connection."
                  isReversed={true}
                  iconBackground="bg-gradient-to-br from-blue-500 to-purple-500"
                  detailsContent={
                    <div className="space-y-4">
                      <p>Seamlessly connect to your TempCup through our dedicated app. Set exact temperatures, create schedules, and receive notifications when your drink is at the perfect temperature.</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-blue-400">●</span>
                          <span className="text-sm">Easy pairing</span>
                        </div>
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-blue-400">●</span>
                          <span className="text-sm">App temperature control</span>
                        </div>
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-blue-400">●</span>
                          <span className="text-sm">Drink tracking</span>
                        </div>
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-blue-400">●</span>
                          <span className="text-sm">Custom profiles</span>
                        </div>
                      </div>
                    </div>
                  }
                />
              </div>
              
              <div className="feature-item opacity-0">
                <ProductFeature 
                  icon={<BatteryCharging size={32} />} 
                  title="Wireless Charging Station" 
                  description="Our custom induction charging station powers up your TempCup without any cables or hassle."
                  iconBackground="bg-gradient-to-br from-amber-400 to-orange-500"
                  detailsContent={
                    <div className="space-y-4">
                      <p>The sleek TempCharge station is designed to complement your TempCup, providing effortless wireless charging at home or in the office. Just place your cup on the base and it starts charging automatically.</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-amber-400">●</span>
                          <span className="text-sm">Effortless charging</span>
                        </div>
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-amber-400">●</span>
                          <span className="text-sm">LED charging indicator</span>
                        </div>
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-amber-400">●</span>
                          <span className="text-sm">Compact design</span>
                        </div>
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-amber-400">●</span>
                          <span className="text-sm">Auto-shutdown</span>
                        </div>
                      </div>
                    </div>
                  }
                />
              </div>
              
              <div className="feature-item opacity-0">
                <ProductFeature 
                  icon={<Clock size={32} />} 
                  title="Smart Scheduling" 
                  description="Set your cup to be ready at specific times. Wake up to a perfectly heated coffee or have a chilled drink waiting for you after work."
                  isReversed={true}
                  iconBackground="bg-gradient-to-br from-purple-400 to-violet-500"
                  detailsContent={
                    <div className="space-y-4">
                      <p>Plan your perfect drink experiences throughout the day. The TempCup app lets you create temperature schedules so your beverage is always ready exactly when you want it.</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-violet-400">●</span>
                          <span className="text-sm">Custom schedules</span>
                        </div>
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-violet-400">●</span>
                          <span className="text-sm">Temperature presets</span>
                        </div>
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-violet-400">●</span>
                          <span className="text-sm">Smart reminders</span>
                        </div>
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-violet-400">●</span>
                          <span className="text-sm">Energy optimization</span>
                        </div>
                      </div>
                    </div>
                  }
                />
              </div>
              
              <div className="feature-item opacity-0">
                <ProductFeature 
                  icon={<Shield size={32} />} 
                  title="Durable Design" 
                  description="Made from premium stainless steel and BPA-free materials, TempCup is built to last. The spill-proof lid ensures worry-free transport."
                  iconBackground="bg-gradient-to-br from-gray-600 to-gray-800"
                  detailsContent={
                    <div className="space-y-4">
                      <p>We've engineered TempCup to withstand the rigors of daily use. With premium materials and a robust construction, your TempCup can handle drops, bumps, and everyday adventures.</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-gray-400">●</span>
                          <span className="text-sm">Impact-resistant</span>
                        </div>
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-gray-400">●</span>
                          <span className="text-sm">Premium materials</span>
                        </div>
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-gray-400">●</span>
                          <span className="text-sm">Spill-proof guarantee</span>
                        </div>
                        <div className="frost-glass p-2 rounded flex items-center gap-2">
                          <span className="text-gray-400">●</span>
                          <span className="text-sm">Dishwasher-safe lid</span>
                        </div>
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </section>
        
        <HowItWorks />
        <section id="design" className="py-16 md:py-24 bg-dark-gray">
          <LookbookSection />
          <div className="mt-16">
            <CupDesigner />
          </div>
        </section>
        <AboutSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
