import React from 'react';

const CategorySection = () => {
  const categories = [
    { icon: "path-to-dinning-icon", label: "Dining" },
    { icon: "path-to-saloon-icon", label: "Salon/Spa" },
    { icon: "path-to-entertainment-icon", label: "Entertainment" },
    { icon: "path-to-cleaning-icon", label: "Cleaning" },
    { icon: "path-to-cleaning-icon", label: "Cleaning" },
    { icon: "path-to-cleaning-icon", label: "Cleaning" },
    { icon: "path-to-cleaning-icon", label: "Cleaning" },
    { icon: "path-to-cleaning-icon", label: "Cleaning" },
  ];

  return (
    <div className=" py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 bg-white  rounded-xl transition duration-300"
            >
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <img src={category.icon} alt={category.label} className="h-10 w-10" />
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
