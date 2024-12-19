import React from 'react';
import BellIcon from '../assets/Notification.png';

const NotificationBar = () => {
  return (
    <div className="bg-green-900 text-white flex items-center justify-between px-6 py-2 text-sm">
      {/* Left Section */}
      <div className="flex items-center space-x-2">
        <img src={BellIcon} alt="Notification" className="h-4 w-4" />
        <span>Delivery lead time will be impacted due to COVID-19. Stay safe!</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <span className="font-medium">Select Language:</span>
        <span className="font-medium cursor-pointer hover:underline">English</span>
        <span className="font-medium cursor-pointer hover:underline">العربية</span>
      </div>
    </div>
  );
};

export default NotificationBar;
