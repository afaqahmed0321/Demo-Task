import React from "react";
import StarIcon from "../assets/Stroke 1.png";
import DiscountIcon from "../assets/DiscountIcon.png";
import LocationIcon from "../assets/Location.png";
import UserAvatar from "../assets/Avatar.png";
import MainIgame from "../assets/image.png"
// import MapIcon from "../assets/MapIcon.png";

const NearbyDeals = () => {
  const deals = [
    {
      id: 1,
      image: MainIgame,
      title: "Loaded Fries At Aloo Cart",
      location: "Pakistan, Lahore",
      locationsCount: 2,
      discount: "Flat 15% Off",
      rating: 4.5,
      vendor: {
        name: "Aloo Cart",
        avatar: UserAvatar,
      },
    },
    {
      id: 2,
      image: MainIgame,
      title: "Loaded Fries At Aloo Cart",
      location: "Pakistan, Lahore",
      locationsCount: 5,
      discount: "Flat 10% Off",
      rating: 4,
      vendor: {
        name: "Aloo Cart",
        avatar: UserAvatar,
      },
    },
    {
      id: 3,
      image: MainIgame,
      title: "Loaded Fries At Aloo Cart",
      location: "Pakistan, Lahore",
      locationsCount: 3,
      discount: "Flat 20% Off",
      rating: 4.5,
      vendor: {
        name: "Aloo Cart",
        avatar: UserAvatar,
      },
    },
  ];

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <div className="flex flex-col justify-last">
            <h2 className="text-3xl font-bold text-gray-800">
              Nearby <span className="text-green-600">Deals</span>
            </h2>
            <p className="text-gray-600">
              Explore nearby deals on map and buy deals to enjoy quality food
              with your family
            </p>
          </div>
          <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 md:block hidden">
            View on Map
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="border rounded-xl overflow-hidden shadow-md bg-white"
            >
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md cursor-pointer">
                  <img
                    src={DiscountIcon}
                    alt="Discount"
                    className="h-5 w-5"
                  />
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, index) => (
                    <img
                      key={index}
                      src={StarIcon}
                      alt="Star"
                      className={`h-5 ${
                        index < Math.round(deal.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <h3 className="font-bold text-lg text-gray-800">
                  {deal.title}
                </h3>
                <div className="flex items-center mt-2 text-gray-600 text-sm">
                  <img src={LocationIcon} alt="Location" className="h-4 mr-2" />
                  <span>{deal.location}</span>
                </div>
                <div className="flex items-center mt-1 text-gray-600 text-sm">
                  <img src={LocationIcon} alt="Location" className="h-4 mr-2" />
                  <span>{`${deal.location}  `}<u className="text-green-600">{`+${deal.locationsCount} more`}</u></span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center">
                    <img
                      src={deal.vendor.avatar}
                      alt={deal.vendor.name}
                      className="h-8 w-8 rounded-full mr-2"
                    />
                    <span className="text-sm text-gray-800">
                      {deal.vendor.name}
                    </span>
                  </div>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700">
                    Get Offer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NearbyDeals;
