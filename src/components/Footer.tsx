
import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-gray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-cool-blue to-warm-red bg-clip-text text-transparent">
              TempCup
            </h3>
            <p className="text-gray-400 mb-4">
              Made-to-order temperature-controlled cups designed for the coolest generation.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/tempcup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 p-2 rounded-md transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} className="text-cool-blue" />
              </a>
              <a 
                href="https://tiktok.com/@tempcup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 p-2 rounded-md transition-colors"
                aria-label="Follow us on TikTok"
              >
                <Youtube size={20} className="text-warm-red" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-cool-blue transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-cool-blue transition-colors">How It Works</a></li>
              <li><a href="#design" className="text-gray-400 hover:text-cool-blue transition-colors">Design Your Cup</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-cool-blue transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-cool-blue transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cool-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cool-blue transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cool-blue transition-colors">Return Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cool-blue transition-colors">Shipping Info</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} TempCup. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
