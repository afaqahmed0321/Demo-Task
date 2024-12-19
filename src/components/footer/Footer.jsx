import React from 'react';
import Visa from '../../assets/Visa.png';
import ApplePay from '../../assets/ApplePay.png';
import SamsungPay from '../../assets/SamsungPay.png';
import Mastercard from '../../assets/Master.png';
import Logo from '../../assets/LogoSymbol.png';

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
            <img src={Logo} alt="Logo" className="h-12 mb-4" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <h4 className="text-lg font-semibold mb-4 text-left">Top Details</h4>
            <p className="text-gray-600 text-left">
              Top Deals is an e-commerce site that connects businesses with customers by providing discounted offers, service coupons, or special offers. Top Deals brings a whole ecommerce platform for business owners and customers to save a lot of money.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <h4 className="text-lg font-semibold mb-4 text-left">Our Company</h4>
            <ul className="space-y-2 text-start">
              <li>
                <a href="#about" className="text-gray-600 hover:text-green-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-600 hover:text-green-600">
                  Privacy & Policy
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-green-600">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#faqs" className="text-gray-600 hover:text-green-600">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-600 hover:text-green-600">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <h4 className="text-lg font-semibold mb-4">Our Payment Partners</h4>
            <div className="flex space-x-4">
              <img src={Visa} alt="Visa" className="h-8" />
              <img src={ApplePay} alt="Apple Pay" className="h-8" />
              <img src={SamsungPay} alt="Samsung Pay" className="h-8" />
              <img src={Mastercard} alt="Mastercard" className="h-8" />
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © Deely 2023. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#facebook" className="text-gray-600 hover:text-blue-500">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#twitter" className="text-gray-600 hover:text-blue-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#instagram" className="text-gray-600 hover:text-pink-500">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
