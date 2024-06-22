"use client";
import { trpc } from "@/utils/trpc";
import React from "react";
import { RestaurantCard } from "./RestaurantCard";

const ListRestaurants = () => {
  const { data: resp } = trpc.getRestaurants.useQuery();
  return (
    <div>
      {resp?.data.restaurants.length === 0 ? (
        <p className="text-center">No Users Found</p>
      ) : (
        <div>
          {resp?.data.restaurants.map((dish) => (
            <RestaurantCard key={dish.id} {...dish} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListRestaurants;
