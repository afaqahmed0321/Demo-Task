import React from 'react';

const SearchForm = () => {
  return (
    <div className="bg-white shadow-lg py-6 px-8 rounded-lg -mt-12 container mx-auto w-4/5">
      {/* <form className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-6 items-center"> */}
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500">
            <option>Dining</option>
            <option>Saloon/Spa</option>
            <option>Entertainment</option>
          </select>
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500">
            <option>Select All</option>
          </select>
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500">
            <option>Select Sub-Category</option>
          </select>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:mt-2">
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500">
            <option>Lahore</option>
            <option>Karachi</option>
            <option>Islamabad</option>
          </select>
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500">
            <option>Destination</option>
          </select>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
              Search
            </button>
          </div>
        </div>
      {/* </form> */}
    </div>
  );
};

export default SearchForm;
