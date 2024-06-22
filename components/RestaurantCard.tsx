import { Restaurant, STORE_CATEGORY } from "@prisma/client";
import Image from "next/image";
import React from "react";

export const RestaurantCard: React.FC<Restaurant> = (dish) => {
  const getCategoryName = (categoryCode: STORE_CATEGORY) => {
    return STORE_CATEGORY[categoryCode] || "Unknown Category";
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            className="h-48 w-full object-cover md:w-48"
            src={dish.images[0]}
            alt={dish.name}
            width={1920} // Adjust based on your layout or image dimensions
            height={1080} // Adjust based on your layout or image dimensions
            layout="responsive" // Optional: Makes the image scale responsively
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {getCategoryName(dish.category)}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {dish.name}
          </a>
          <p className="mt-2 text-gray-500">{dish.desc}</p>
          <div className="flex items-center mt-4">
            <div className="flex items-center">
              <Image
                src={`/${dish.featured.icon}.svg`}
                alt="Featured"
                className="h-6 w-6"
                width={24} // Adjust based on your layout or image dimensions
                height={24} // Adjust based on your layout or image dimensions
                layout="fixed"
              />
              <span className="ml-2 text-sm font-medium">
                {dish.featured.text}
              </span>
            </div>
            <div className="ml-auto">
              <span className="text-sm font-medium">{`Rating: ${dish.rating} (${dish.ratingCount} reviews)`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
