
import React from 'react';

interface ProductFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isReversed?: boolean;
  iconBackground: string;
}

const ProductFeature: React.FC<ProductFeatureProps> = ({
  icon,
  title,
  description,
  isReversed = false,
  iconBackground
}) => {
  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 md:gap-12 frost-glass p-6 rounded-lg`}>
      <div className={`flex-shrink-0 rounded-full p-6 ${iconBackground} w-24 h-24 flex items-center justify-center text-white`}>
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProductFeature;
