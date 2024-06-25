import React, { createContext, FC, useContext } from "react";
import { Restaurant } from "@prisma/client";

interface RestaurantContextType {
  restaurant: Restaurant | null;
}

const RestaurantContext = createContext<RestaurantContextType | null>(null);

interface RestaurantProviderProps extends RestaurantContextType {
  children: React.ReactNode;
}

export const RestaurantProvider: FC<RestaurantProviderProps> = ({
  children,
  restaurant,
}) => {
  return (
    <RestaurantContext.Provider value={{ restaurant }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurantCardContext = () => {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error(
      "useRestaurantCardContext must be used within a RestaurantProvider",
    );
  }
  return context;
};
export default RestaurantContext;
