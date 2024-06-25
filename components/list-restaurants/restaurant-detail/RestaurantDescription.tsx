import { FC } from "react";
import { useRestaurantCardContext } from "../context/RestaurantContext";

interface RestaurantDescriptionProps {
  className?: string;
}

export const RestaurantDescription: FC<RestaurantDescriptionProps> = ({
  className,
}) => {
  const { restaurant } = useRestaurantCardContext();
  const desc = restaurant?.desc;
  return (
    <p className={`truncate text-base text-primary md:text-lg ${className}`}>
      {desc}
    </p>
  );
};
