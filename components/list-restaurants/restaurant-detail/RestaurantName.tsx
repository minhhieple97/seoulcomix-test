import React, { FC } from "react";
import { useRestaurantCardContext } from "../context/RestaurantContext";

interface RestaurantNameProps {
  className?: string;
}

export const RestaurantName: FC<RestaurantNameProps> = ({ className }) => {
  const { restaurant } = useRestaurantCardContext();
  const name = restaurant?.name;
  return (
    <p
      className={`w-[80%] shrink truncate text-base font-bold text-primary md:text-lg ${className}`}
    >
      {name}
    </p>
  );
};
