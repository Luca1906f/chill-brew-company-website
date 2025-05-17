
import React, { useState } from 'react';

interface ProductFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isReversed?: boolean;
  iconBackground: string;
  animation?: 'fadeIn' | 'slideIn' | 'scaleIn';
  detailsContent?: React.ReactNode;
}

const ProductFeature: React.FC<ProductFeatureProps> = ({
  icon,
  title,
  description,
  isReversed = false,
  iconBackground,
  animation,
  detailsContent
}) => {
  const [showDetails, setShowDetails] = useState(false);

  // Animation classes based on the animation prop
  const getAnimationClass = () => {
    switch (animation) {
      case 'fadeIn':
        return 'opacity-0 animate-fade-in';
      case 'slideIn':
        return 'translate-y-10 opacity-0 animate-fade-in';
      case 'scaleIn':
        return 'scale-95 opacity-0 animate-fade-in';
      default:
        return '';
    }
  };

  return (
    <div className="relative">
      <div 
        className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} 
          items-center gap-6 md:gap-12 frost-glass p-6 rounded-lg hover-scale ${getAnimationClass()} ${detailsContent ? 'cursor-pointer' : ''}`}
        onClick={() => detailsContent && setShowDetails(!showDetails)}
      >
        <div className={`flex-shrink-0 rounded-full p-6 ${iconBackground} w-24 h-24 flex items-center justify-center text-white transform transition-transform hover:scale-110 hover:rotate-3`}>
          {icon}
        </div>
        <div className="flex flex-col gap-2 flex-grow">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-gray-300">{description}</p>
          
          {detailsContent && (
            <div className="mt-2 flex items-center text-cool-blue">
              <span className="text-sm">{showDetails ? 'Weniger anzeigen' : 'Mehr erfahren'}</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className={`ml-1 transition-transform ${showDetails ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          )}
          
          {/* Interactive hover element */}
          <div className="mt-2 h-1 w-0 bg-gradient-to-r from-cool-blue to-warm-red group-hover:w-full transition-all duration-300"></div>
        </div>
      </div>
      
      {/* Expandable Details Panel */}
      {detailsContent && (
        <div 
          className={`overflow-hidden transition-all duration-300 frost-glass mt-2 rounded-lg ${
            showDetails ? 'max-h-96 opacity-100 p-4' : 'max-h-0 opacity-0 p-0'
          }`}
        >
          {detailsContent}
        </div>
      )}
    </div>
  );
};

export default ProductFeature;
