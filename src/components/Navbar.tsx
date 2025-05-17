
import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-cool-blue to-warm-red bg-clip-text text-transparent">
            TempCup
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-cool-blue transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-cool-blue transition-colors">
            How It Works
          </a>
          <a href="#about" className="text-gray-600 hover:text-cool-blue transition-colors">
            About Us
          </a>
          <a href="#contact" className="text-gray-600 hover:text-cool-blue transition-colors">
            Contact
          </a>
        </div>

        <Button className="hidden md:block bg-gradient-to-r from-cool-blue to-warm-red hover:opacity-90 transition-opacity">
          Pre-Order Now
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#features"
              className="text-gray-600 hover:text-cool-blue py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-cool-blue py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-cool-blue py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-cool-blue py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-gradient-to-r from-cool-blue to-warm-red hover:opacity-90 transition-opacity w-full">
              Pre-Order Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
