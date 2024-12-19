import React from 'react';
import { Data } from './data';

const StatsSection = () => {
  const stats = Data

  return (
    <div className="py-1 bg-white">
      <div className="container mx-auto px-6 shadow-md">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{stat.number}</h2>
              <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
