
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
              alt="Our team at TempCup" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About TempCup</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2023, TempCup is a startup with a mission to revolutionize the way people enjoy their beverages. We believe everyone deserves to experience their drinks at the perfect temperature.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of engineers and designers spent two years developing our proprietary temperature control technology that allows a single cup to both heat and cool beverages efficiently.
            </p>
            
            <div className="flex flex-col space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-cool-blue/20 text-cool-blue flex items-center justify-center flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-semibold">Sustainable Design</h3>
                  <p className="text-sm text-gray-600">Our cups are built to last and reduce single-use waste.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-cool-blue/20 text-cool-blue flex items-center justify-center flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-semibold">Energy Efficient</h3>
                  <p className="text-sm text-gray-600">Advanced insulation and smart power management.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-cool-blue/20 text-cool-blue flex items-center justify-center flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-semibold">Innovative Team</h3>
                  <p className="text-sm text-gray-600">Backed by experts in thermal engineering and product design.</p>
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
