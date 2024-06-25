import React, { FC } from "react";

interface RestaurantNameProps {
  name: string;
  className?: string;
}

export const RestaurantName: FC<RestaurantNameProps> = ({
  name,
  className,
}) => {
  return (
    <p
      className={`w-[80%] shrink truncate text-base font-bold text-primary md:text-lg ${className}`}
    >
      {name}
    </p>
  );
};
