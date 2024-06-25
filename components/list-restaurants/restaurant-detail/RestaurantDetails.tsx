import React, { FC } from "react";

interface RestaurantDetailsProps {
  children: React.ReactNode;
  className?: string;
}

export const RestaurantDetails: FC<RestaurantDetailsProps> = ({
  children,
  className,
}) => {
  return <div className={`${className ?? ""}`}>{children}</div>;
};
