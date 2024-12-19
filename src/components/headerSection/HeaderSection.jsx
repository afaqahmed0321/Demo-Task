import React, { useState } from "react";
import Group from "../../assets/Group.png";
import SampleVideo from "../../assets/SampleVideo.mp4";
import VideoPoster from "../../assets/VideoThumbnail.png";

const HeaderSection = () => {
  return (
    <div className="bg-green-50 py-16 relative z-0">
      <div className="container mx-auto grid grid-col-12 lg:grid-cols-2 space-y-5 lg:space-y-0">
        <div className="relative">
          <div className="px-16">
          <h1 className="xl:text-7xl text-4xl text-left font-bold text-gray-800 leading-tight">
            Get The Best <span className="text-green-600">Deals</span> Near By
            You!
          </h1>
          <p className="text-gray-600 mt-4 xl:text-4xl text-2xl text-left">
            Explore nearby deals on map and buy deals to enjoy quality food with
            your family.
          </p>
          <div className="text-left">
            <button className="bg-green-600 text-white px-6 py-2 mt-6 rounded-full hover:bg-green-700">
              Explore
            </button>
          </div>
          </div>
          <img
            src={Group}
            alt="Explore Deals"
            className="w-72 rounded-lg absolute bottom-0 right-0 -z-10"
          />
        </div>
        <div>
          <video
            src={SampleVideo}
            className="w-full h-full rounded-lg shadow-md"
            controls
            poster={VideoPoster}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
