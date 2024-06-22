import { Restaurant, STORE_CATEGORY } from "@prisma/client";
import React from "react";
import CustomImage from "./CustomImage";
export const RestaurantCard: React.FC<Restaurant> = (restaurant) => {
  const getCategoryName = (categoryCode: STORE_CATEGORY) => {
    return STORE_CATEGORY[categoryCode] || "Unknown Category";
  };

  return (
    <div className="w-full md:max-w-xs">
      <div className="relative aspect-[358/200] w-full md:w-[20rem]">
        <CustomImage
          src={restaurant.images[0]}
          alt={restaurant.name}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          className="rounded-xl object-cover"
          fallbackSrc="/not-found.png"
          priority={true}
        ></CustomImage>
      </div>
      <div>
        <h2>{restaurant.name}</h2>
        <p>{restaurant.desc}</p>
      </div>
    </div>
  );
};
