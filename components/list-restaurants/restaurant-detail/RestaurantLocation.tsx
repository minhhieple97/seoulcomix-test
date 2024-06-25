import { FC } from "react";
import { TEXT_BY_STORE_CATEGORY } from "@/app/_constants";
import { capitalizeFirstLetter } from "@/app/_helpers";
import { STORE_CATEGORY } from "@prisma/client";

interface RestaurantLocationProps {
  city: string;
  category: STORE_CATEGORY;
  priceRange: string;
}

export const RestaurantLocation: FC<RestaurantLocationProps> = ({
  city,
  category,
  priceRange,
}) => {
  return (
    <p className="truncate text-base text-primary md:text-lg">
      {capitalizeFirstLetter(city)} · {TEXT_BY_STORE_CATEGORY[category]} ·
      {priceRange} won
    </p>
  );
};
