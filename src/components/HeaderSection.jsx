import React from 'react';
import Group from '../assets/Group.png';
import Play from '../assets/PlayIcon.png';

const HeaderSection = () => {
  return (
    <div className="bg-green-50 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className='left-side col-span-8'>
          <h1 className="text-7xl font-bold text-gray-800 leading-tight">
            Get The Best <span className="text-green-600">Deals</span> Near By You!
          </h1>
          <div className='flex justify-between'>
            <div>
              <p className="text-gray-600 mt-4 text-4xl">
                Explore nearby deals on map and buy deals to enjoy quality food with your family.
              </p>
              <button className="bg-green-600 text-white px-6 py-2 mt-6 rounded-full hover:bg-green-700">
                Explore
              </button>
            </div>
            <div className="mt-6">
              <img
                src={Group}
                alt="Explore Deals"
                className="w-full md:w-3/4 md:ms-24 me-24 w-100 rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        <div className='w-full right-side'>
          <div className="w-full mt-8 md:mt-0 flex justify-center relative">
            <div className=""> {/* Ensuring 40% width for the video */}
              <video
                src="../assets/SampleVideo.mp4"
                className="w-full rounded-lg shadow-md"
                controls
                poster="path-to-poster-image.jpg"
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <button className="bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600">
                  <img src={Play} alt="Play Video" className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
