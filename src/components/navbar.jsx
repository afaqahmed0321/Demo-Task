import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import Filter from "../assets/Filter.png";
import Buy from "../assets/Buy.png";
import Profile from "../assets/Profile.png";
import Toggle from "../assets/MENU.png";
import Flag from "../assets/flag.png";
import HomeIcon from '../assets/Home.png'
import DiningIcon from '../assets/Dinning.png';
import SalonIcon from '../assets/Salon.png';
import EntertainmentIcon from '../assets/Entetainment.png';
import HomeServicesIcon from '../assets/Home Services.png';


import NotificationBar from "./notificationBar";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle for mobile menu
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleCountryChange = (country) => {
        console.log("Selected country:", country);
        setDropdownOpen(false); // Close the dropdown after selection
    };
    return (
        <>
            {/* Notification Bar */}
            <NotificationBar />

            {/* Navbar */}
            <nav className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex">
                        <div className="md:hidden">
                            <button
                                className="text-gray-700 focus:outline-none"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <img src={Toggle} />
                            </button>
                        </div>
                        <div className="flex items-center mx-4">
                            <img src={Logo} alt="Logo" className="h-8" />

                            <div className="ml-4 relative hidden md:block border rounded-3xl border-green-600 p-1">
                                <div className="relative">
                                    <button
                                        className="flex items-center bg-transparent border-none outline-none text-gray-700 text-sm font-medium px-3 py-1 rounded"
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                    >
                                        <img src={Flag} alt="Flag" className="h-4 w-6 mr-2" />
                                        Pakistan
                                    </button>
                                    {dropdownOpen && (
                                        <ul className="absolute left-0 mt-2 bg-white border rounded shadow-lg w-40 z-10">
                                            <li
                                                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => handleCountryChange("Pakistan")}
                                            >
                                                <img src={Flag} alt="Pakistan Flag" className="h-4 w-6 mr-2" />
                                                Pakistan
                                            </li>
                                            <li
                                                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => handleCountryChange("USA")}
                                            >
                                                <span className="mr-2">🇺🇸</span> USA
                                            </li>
                                            <li
                                                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => handleCountryChange("UK")}
                                            >
                                                <span className="mr-2">🇬🇧</span> UK
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative hidden md:block">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-gray-100 text-sm px-4 py-2 rounded-full outline-none"
                            />
                        </div>

                        <div
                            className={`${isMenuOpen ? "block" : "hidden"
                                } md:block relative`}
                        >
                            <div className="flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 h-10 w-10 rounded-xl shadow-md">
                                <img src={Filter} alt="Settings" className="h-5 cursor-pointer" />
                            </div>
                        </div>


                        <div className="relative">
                            <div className="flex items-center justify-center bg-gray-100 h-10 w-10 rounded-full shadow-md">
                                <img src={Buy} alt="Cart" className="h-5 cursor-pointer" />
                            </div>
                            <span className="absolute -top-2 -right-2 bg-yellow-500 text-xs font-semibold text-white px-2 py-1 rounded-full">
                                03
                            </span>
                        </div>

                        <div className={`${isMenuOpen ? "block" : "hidden"
                            } md:block relative group`}>
                            <div className="flex items-center justify-center bg-gray-100 h-10 w-10 rounded-full shadow-md">
                                <img src={Profile} alt="User" className="h-5 cursor-pointer" />
                            </div>
                            <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md hidden group-hover:block">
                                <a
                                    href="#login"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Customer Login
                                </a>
                                <a
                                    href="#login"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Marchant Login
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <ul
                    className={`${isMenuOpen ? "block" : "hidden"
                        }mx-auto md:flex hidden flex-col md:flex-row items-center justify-around space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0 pb-2`}
                >
                    <li>
                        <a
                            href="#home"
                            className="flex items-center text-gray-700 hover:text-green-600 text-sm font-medium"
                        >
                            <img src={HomeIcon} alt="Home" className="h-6 w-6 mb-1" />
                            HOME
                        </a>
                    </li>
                    <li>
                        <a
                            href="#dining"
                            className="flex  items-center text-gray-700 hover:text-green-600 text-sm font-medium"
                        >
                            <img src={DiningIcon} alt="Dining" className="h-6 w-6 mb-1" />
                            DINING
                        </a>
                    </li>
                    <li>
                        <a
                            href="#salon"
                            className="flex  items-center text-gray-700 hover:text-green-600 text-sm font-medium"
                        >
                            <img src={SalonIcon} alt="Salon" className="h-6 w-6 mb-1" />
                            SALON/SPA
                        </a>
                    </li>
                    <li>
                        <a
                            href="#entertainment"
                            className="flex  items-center text-gray-700 hover:text-green-600 text-sm font-medium"
                        >
                            <img src={EntertainmentIcon} alt="Entertainment" className="h-6 w-6 mb-1" />
                            ENTERTAINMENT
                        </a>
                    </li>
                    <li>
                        <a
                            href="#services"
                            className="flex  items-center text-gray-700 hover:text-green-600 text-sm font-medium"
                        >
                            <img src={HomeServicesIcon} alt="Home Services" className="h-6 w-6 mb-1" />
                            HOME SERVICES
                        </a>
                    </li>
                    <li>
                        <a
                            href="#services"
                            className="flex  items-center text-gray-700 hover:text-green-600 text-sm font-medium"
                        >
                            <img src={HomeServicesIcon} alt="Home Services" className="h-6 w-6 mb-1" />
                            HOME SERVICES
                        </a>
                    </li>
                </ul>



            </nav>
        </>
    );
};

export default Navbar;
