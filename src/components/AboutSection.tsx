
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-dark-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
              alt="Our team at TempCup" 
              className="rounded-lg shadow-lg w-full border border-white/10"
            />
          </div>
          
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">About TempCup</h2>
            <p className="text-gray-300 mb-4">
              Founded in 2023, TempCup is a startup with a mission to revolutionize the way people enjoy their beverages. We believe everyone deserves to experience their drinks at the perfect temperature.
            </p>
            <p className="text-gray-300 mb-6">
              Our team of engineers and designers spent two years developing our proprietary temperature control technology that allows a single cup to both heat and cool beverages efficiently.
            </p>
            
            <div className="flex flex-col space-y-4">
              <div className="flex items-start gap-3 frost-glass p-4 rounded-lg">
                <div className="w-6 h-6 rounded-full bg-cool-blue/20 text-cool-blue flex items-center justify-center flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-semibold text-white">Made-to-Order</h3>
                  <p className="text-sm text-gray-300">Every cup is customized and created just for you.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 frost-glass p-4 rounded-lg">
                <div className="w-6 h-6 rounded-full bg-cool-blue/20 text-cool-blue flex items-center justify-center flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-semibold text-white">Energy Efficient</h3>
                  <p className="text-sm text-gray-300">Advanced insulation and smart power management.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 frost-glass p-4 rounded-lg">
                <div className="w-6 h-6 rounded-full bg-cool-blue/20 text-cool-blue flex items-center justify-center flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-semibold text-white">Youth Focused</h3>
                  <p className="text-sm text-gray-300">Designed for the next generation of beverage enthusiasts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
