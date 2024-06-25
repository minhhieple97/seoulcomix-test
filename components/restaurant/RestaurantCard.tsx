"use client";
import { Restaurant } from "@prisma/client";
import React, { FC } from "react";
import { CustomImage } from "../ui/CustomImage";
import Image from "next/image";
import { TEXT_BY_STORE_CATEGORY } from "@/app/_constants";
import { capitalizeFirstLetter, getRestaurantImage } from "@/app/_helpers";
import { HeartIcon } from "../ui/HeartIcon";
import Loading from "@/app/loading";
import { useFavoriteRestaurant } from "./hooks/useFavoriteRestaurant ";
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
    <div className="w-full md:max-w-xs">
      {isLoading && <Loading></Loading>}
      <div className="relative aspect-[358/200] w-full md:w-[20rem]">
        <div
          className="absolute right-2 top-2 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white-55 md:h-14 md:w-14"
          onClick={toggleFavorite}
        >
          <HeartIcon
            className={`h-[26px] w-[26px] ${isFavoriteVal ? "fill-white" : "fill-none"} md:h-[28px] md:w-[28px]`}
          ></HeartIcon>
        </div>
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
        {featured &&
          typeof featured === "object" &&
          "text" in featured &&
          typeof featured.text === "string" && (
            <div className="flex items-start gap-1 md:gap-2">
              {featured &&
                typeof featured === "object" &&
                "icon" in featured &&
                typeof featured.icon === "string" && (
                  <Image
                    src={`/${featured.icon}.svg`}
                    width={15}
                    height={15}
                    alt="stars"
                    className="h-[15px] w-[15px] md:h-[18px] md:w-[18px]"
                    priority={true}
                  ></Image>
                )}
              <p className="truncate text-xs text-orange md:text-sm">
                {featured.text}
              </p>
            </div>
          )}
        {name && (
          <div className="flex items-center justify-between gap-1 md:gap-2">
            <p className="w-[80%] shrink truncate text-base font-bold text-primary md:text-lg">
              {name}
            </p>
            <div className="flex">
              <Image
                src={`/stars-01.svg`}
                width={15}
                height={15}
                alt="stars"
                className="h-[15px] w-[15px] md:h-[18px] md:w-[18px]"
              ></Image>
              <p className="text-xs text-primary md:text-sm">
                {rating}({ratingCount})
              </p>
            </div>
          </div>
        )}
        {desc && (
          <p className="truncate text-base text-primary md:text-lg">{desc}</p>
        )}
        <p className="truncate text-base text-primary md:text-lg">
          {capitalizeFirstLetter(city)} ·{TEXT_BY_STORE_CATEGORY[category]} ·
          {priceRange} won
        </p>
      </div>
    </div>
  );
};
