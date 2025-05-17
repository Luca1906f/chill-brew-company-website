
import React from 'react';

interface ProductFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isReversed?: boolean;
  iconBackground: string;
  animation?: 'fadeIn' | 'slideIn' | 'scaleIn';
}

const ProductFeature: React.FC<ProductFeatureProps> = ({
  icon,
  title,
  description,
  isReversed = false,
  iconBackground,
  animation
}) => {
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
    <div 
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} 
        items-center gap-6 md:gap-12 frost-glass p-6 rounded-lg hover-scale ${getAnimationClass()}`}
    >
      <div className={`flex-shrink-0 rounded-full p-6 ${iconBackground} w-24 h-24 flex items-center justify-center text-white transform transition-transform hover:scale-110 hover:rotate-3`}>
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
        
        {/* Interactive hover element */}
        <div className="mt-2 h-1 w-0 bg-gradient-to-r from-cool-blue to-warm-red group-hover:w-full transition-all duration-300"></div>
      </div>
    </div>
  );
};

export default ProductFeature;

