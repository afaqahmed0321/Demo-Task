import React from 'react';
import { infoData } from './data';

const InfoSection = () => {
  const infoItems = infoData

  return (
    <div className="lg:py-12">
      <div className="container md:mx-auto md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center md:px-6 py-8"
            >
              <img src={item.icon} alt={item.title} className="h-12 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
