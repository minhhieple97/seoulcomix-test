import React, { FC } from "react";

interface RestaurantDescriptionProps {
  desc: string;
  className?: string;
}

export const RestaurantDescription: FC<RestaurantDescriptionProps> = ({
  desc,
  className,
}) => {
  return (
    <p className={`truncate text-base text-primary md:text-lg ${className}`}>
      {desc}
    </p>
  );
};
