import React from 'react';

const InquiryWithMapSection = () => {
  return (
    <div>
      <div className="bg-[#FCF5DC] py-8 relative">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg font-medium text-gray-800 mb-4">
            For inquiries and more information
          </p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">
            Get in Touch
          </button>
        </div>
      </div>

      <div className="w-full h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28942.084146434566!2d55.16204140000001!3d25.105497599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43b1b8d2cfe9%3A0xfbe4172abce2e6b!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1675453050601!5m2!1sen!2s"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          title="Map"
          className="border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default InquiryWithMapSection;
