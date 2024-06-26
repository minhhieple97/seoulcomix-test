import React from 'react';
import { HeartIcon } from '../../ui/icon/HeartIcon';

interface FavoriteButtonProps {
  isFavorite: boolean;
  toggleFavorite: () => void;
  className?: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorite,
  toggleFavorite,
  className,
}) => {
  return (
    <div
      className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white-55 md:h-14 md:w-14 ${className ?? ''}`}
      onClick={toggleFavorite}
    >
      <HeartIcon
        className={`h-[26px] w-[26px] ${isFavorite ? 'fill-white' : 'fill-none'} md:h-[28px] md:w-[28px]`}
      ></HeartIcon>
    </div>
  );
};

export default FavoriteButton;
