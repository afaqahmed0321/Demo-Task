import React from 'react';
import { categoryData } from './data';
import InfoSection from './infoSection';

const CategorySection = () => {
    const categories = categoryData

    return (
        <div className=" py-12 lg:px-28">
            <div className=" md:block hidden container-fluid mx-auto">
                <div className="flex justify-around md:grid-cols-4 lg:grid-cols-8 gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center  bg-white  rounded-xl transition duration-300"
                        >
                            <div className="">
                                <img src={category.icon} alt={category.label} className=" p-4 rounded-full mb-4" />
                            </div>
                            <span className="text-sm font-medium text-gray-800">{category.label}</span>
                        </div>
                    ))}
                </div>
            </div>
            <InfoSection />
        </div>
    );
};

export default CategorySection;
