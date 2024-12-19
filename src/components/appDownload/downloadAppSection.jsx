import React from 'react';
import MobileAppImage from '../../assets/MobileAppImage.png'; 
import GooglePlayBadge from '../../assets/GooglePlayBadge.png'; 
import AppStoreBadge from '../../assets/AppStoreBadge.png'; 

const AppDownloadSection = () => {
  return (
    <div className="lg:py-16">
      <div className="bg-green-50 container mx-auto grid grid-cols-12 gap-6 items-center rounded-2xl py-8">
        <div className="col-span-12 md:col-span-6 flex justify-center ">
          <div className="relative">
            <div className="absolute inset-0 py-4 rounded-full -z-10 w-80 h-80 -top-8 left-8"></div>
            <img
              src={MobileAppImage}
              alt="Mobile App"
              className="w-full max-w-sm rounded-lg "
            />
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 text-left px-8 md:px-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Download Our App To <br />
            Get Amazing <span className="text-green-600">Deals</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Get new deals every day. Top deals have the best offers and share
            them with you. To avail of offers, find our app in the Play Store.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <img
              src={GooglePlayBadge}
              alt="Google Play Store"
              className="h-12 cursor-pointer"
            />
            <img
              src={AppStoreBadge}
              alt="Apple App Store"
              className="h-12 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadSection;
