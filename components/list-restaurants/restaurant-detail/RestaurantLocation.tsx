import { FC } from "react";
import { TEXT_BY_STORE_CATEGORY } from "@/app/_constants";
import { capitalizeFirstLetter } from "@/app/_helpers";
import { useRestaurantCardContext } from "../context/RestaurantContext";

interface RestaurantLocationProps {
  className?: string;
}

export const RestaurantLocation: FC<RestaurantLocationProps> = ({
  className,
}) => {
  const { restaurant } = useRestaurantCardContext();
  const city = restaurant?.city ?? "";
  const category = restaurant?.category;
  const priceRange = restaurant?.priceRange;
  return (
    <p
      className={`truncate text-base text-primary md:text-lg ${className ?? ""}`}
    >
      {capitalizeFirstLetter(city)}
      {category && ` · ${TEXT_BY_STORE_CATEGORY[category]}`}
      {priceRange && ` · ${priceRange} won`}
    </p>
  );
};
