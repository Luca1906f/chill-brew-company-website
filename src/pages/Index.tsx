
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import CupDesigner from '@/components/CupDesigner';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ProductFeature from '@/components/ProductFeature';
import { ThermometerSnowflake, ThermometerSun, Battery, Clock, Shield } from 'lucide-react';

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
                  description="Keep your cold drinks perfectly chilled for up to 8 hours, no matter the outside temperature. Our proprietary cooling system maintains the ideal temperature without freezing."
                  iconBackground="bg-gradient-to-br from-blue-400 to-cool-blue"
                />
              </div>
              
              <div className="feature-item opacity-0">
                <ProductFeature 
                  icon={<ThermometerSun size={32} />} 
                  title="Heating Control" 
                  description="Maintain your hot beverages at your preferred temperature for hours. Adjust the exact temperature via our companion app for the perfect sipping experience."
                  isReversed={true}
                  iconBackground="bg-gradient-to-br from-warm-red to-orange-400"
                />
              </div>
              
              <div className="feature-item opacity-0">
                <ProductFeature 
                  icon={<Battery size={32} />} 
                  title="All-Day Battery" 
                  description="A single charge powers TempCup for up to 24 hours. The wireless charging base makes recharging simple and convenient."
                  iconBackground="bg-gradient-to-br from-green-400 to-emerald-500"
                />
              </div>
              
              <div className="feature-item opacity-0">
                <ProductFeature 
                  icon={<Clock size={32} />} 
                  title="Smart Scheduling" 
                  description="Set your cup to be ready at specific times. Wake up to a perfectly heated coffee or have a chilled drink waiting for you after work."
                  isReversed={true}
                  iconBackground="bg-gradient-to-br from-purple-400 to-violet-500"
                />
              </div>
              
              <div className="feature-item opacity-0">
                <ProductFeature 
                  icon={<Shield size={32} />} 
                  title="Durable Design" 
                  description="Made from premium stainless steel and BPA-free materials, TempCup is built to last. The spill-proof lid ensures worry-free transport."
                  iconBackground="bg-gradient-to-br from-gray-600 to-gray-800"
                />
              </div>
            </div>
          </div>
        </section>
        
        <HowItWorks />
        <CupDesigner />
        <AboutSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

