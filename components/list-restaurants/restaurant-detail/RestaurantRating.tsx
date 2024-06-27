import React, { FC } from 'react';
import Image from 'next/image';
import { useRestaurantCardContext } from '../context/RestaurantContext';

interface RestaurantRatingProps {
  className?: string;
}

export const RestaurantRating: FC<RestaurantRatingProps> = ({ className }) => {
  const { restaurant } = useRestaurantCardContext();
  const rating = restaurant?.rating;
  const ratingCount = restaurant?.ratingCount;
  return (
    <div className={`flex ${className ?? ''}`}>
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
