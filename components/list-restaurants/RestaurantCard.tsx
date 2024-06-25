"use client";
import { Restaurant } from "@prisma/client";
import React, { FC } from "react";
import { CustomImage } from "../ui/components/CustomImage";
import { getRestaurantImage } from "@/app/_helpers";
import Loading from "@/app/loading";
import { useFavoriteRestaurant } from "./hooks/useFavoriteRestaurant ";
import FavoriteButton from "./restaurant-detail/FavoriteButton";
import { RestaurantFeature } from "./restaurant-detail/RestaurantFeature";
import { RestaurantName } from "./restaurant-detail/RestaurantName";
import { RestaurantRating } from "./restaurant-detail/RestaurantRating";
import { RestaurantDescription } from "./restaurant-detail/RestaurantDescription";
import { RestaurantLocation } from "./restaurant-detail/RestaurantLocation";
import { RestaurantDetails } from "./restaurant-detail/RestaurantDetails";

export const RestaurantCard: FC<Restaurant> = (restaurant) => {
  const {
    id,
    name,
    category,
    rating,
    ratingCount,
    images,
    featured,
    city,
    desc,
    priceRange,
  } = restaurant;
  const { isFavoriteVal, toggleFavorite, isLoading } = useFavoriteRestaurant(
    id,
    restaurant.isFavorite,
  );

  return (
    <RestaurantDetails className="w-full md:max-w-xs">
      {isLoading && <Loading></Loading>}
      <div className="relative aspect-[358/200] w-full md:w-[20rem]">
        <FavoriteButton
          isFavorite={isFavoriteVal}
          toggleFavorite={toggleFavorite}
        ></FavoriteButton>
        <CustomImage
          src={getRestaurantImage(images)}
          alt={name}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          className="relative rounded-xl object-cover"
          fallbackSrc="/not-found.png"
          priority={true}
        ></CustomImage>
      </div>
      <div className="mt-2 w-full">
        <RestaurantFeature featured={featured}></RestaurantFeature>
        {name && (
          <div className="flex items-center justify-between gap-1 md:gap-2">
            <RestaurantName name={name}></RestaurantName>
            <RestaurantRating
              rating={rating}
              ratingCount={ratingCount}
            ></RestaurantRating>
          </div>
        )}
        {desc && <RestaurantDescription desc={desc}></RestaurantDescription>}
        <RestaurantLocation
          category={category}
          city={city}
          priceRange={priceRange}
        ></RestaurantLocation>
      </div>
    </RestaurantDetails>
  );
};
