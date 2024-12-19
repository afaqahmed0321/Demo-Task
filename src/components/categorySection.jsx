import React from 'react';
import Dining from '../assets/DiningImage.png';
import Salon from '../assets/SalonImage.png';
import Entertainment from '../assets/EntertainmentImage.png';
import Cleaning from '../assets/CleaningImage.png';


const CategorySection = () => {
  const categories = [
    { icon: Dining, label: "Dining" },
    { icon: Salon, label: "Salon/Spa" },
    { icon: Entertainment, label: "Entertainment" },
    { icon: Cleaning, label: "Cleaning" },
    { icon: Cleaning, label: "Cleaning" },
    { icon: Cleaning, label: "Cleaning" },
    { icon: Cleaning, label: "Cleaning" },
  ];

  return (
    <div className=" py-12">
      <div className="container-fluid mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 bg-white  rounded-xl transition duration-300"
            >
              <div className="">
                <img src={category.icon} alt={category.label} className=" p-4 rounded-full mb-4" />
              </div>
              <span className="text-sm font-medium text-gray-800">{category.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
