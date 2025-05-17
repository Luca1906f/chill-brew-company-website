
import React, { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-blue/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center z-20">
          <span className="text-xl font-bold bg-gradient-to-r from-cool-blue to-warm-red bg-clip-text text-transparent">
            TempCup
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {[
            { id: 'features', label: 'Features' },
            { id: 'how-it-works', label: 'How It Works' },
            { id: 'design', label: 'Design' },
            { id: 'about', label: 'About' },
            { id: 'contact', label: 'Contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:text-cool-blue transition-colors relative group px-1"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cool-blue group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>

        <Button 
          className="hidden md:block bg-gradient-to-r from-cool-blue to-warm-red hover:opacity-90 transition-opacity"
          onClick={() => scrollToSection('design')}
        >
          Design Your Cup
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none z-20"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - Fullscreen Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-dark-blue/95 backdrop-blur-md z-10 flex flex-col items-center justify-center animate-fade-in">
          <div className="flex flex-col space-y-8 text-center">
            {[
              { id: 'features', label: 'Features' },
              { id: 'how-it-works', label: 'How It Works' },
              { id: 'design', label: 'Design' },
              { id: 'about', label: 'About' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-2xl text-gray-300 hover:text-cool-blue transition-colors"
              >
                {item.label}
              </button>
            ))}
            
            <Button 
              className="bg-gradient-to-r from-cool-blue to-warm-red hover:opacity-90 transition-opacity mt-4 w-48 mx-auto"
              onClick={() => scrollToSection('design')}
            >
              Design Your Cup
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

