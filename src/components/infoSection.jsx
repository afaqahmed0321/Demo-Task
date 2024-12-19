import React from 'react';
import DiscountIcon from '../assets/Discount.png';
import SaveIcon from '../assets/Save.png';
import SecurePaymentIcon from '../assets/Payment.png';

const InfoSection = () => {
  const infoItems = [
    {
      icon: DiscountIcon,
      title: "Amazing Last Minute Discounts",
      description: "Get Amazing Last Minute Discounts on your favorite categories food, beauty, getaways & more.",
    },
    {
      icon: SaveIcon,
      title: "Save",
      description: "Save Money with our deals & offers.",
    },
    {
      icon: SecurePaymentIcon,
      title: "Secure Payments",
      description: "The secure payment methods throughout the checkout process keep your data secure & safe.",
    },
  ];

  return (
    <div className="py-12">
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
