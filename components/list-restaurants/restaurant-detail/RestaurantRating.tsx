import React, { FC } from "react";
import Image from "next/image";

interface RestaurantRatingProps {
  rating: number;
  ratingCount: number;
  className?: string;
}

export const RestaurantRating: FC<RestaurantRatingProps> = ({
  rating,
  ratingCount,
  className,
}) => {
  return (
    <div className={`flex ${className ?? ""}`}>
      <Image
        src={`/stars-01.svg`}
        width={15}
        height={15}
        alt="stars"
        className="h-[15px] w-[15px] md:h-[18px] md:w-[18px]"
      />
      <p className="text-xs text-primary md:text-sm">
        {rating}({ratingCount})
      </p>
    </div>
  );
};
