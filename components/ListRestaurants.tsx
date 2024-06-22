"use client";
import React from "react";
import { trpc } from "../utils/trpc";
import { RestaurantCard } from "./RestaurantCard";
import Loading from "@/app/loading";

const ListRestaurants = () => {
  const { data: resp, isLoading } = trpc.getRestaurants.useQuery();
  if (isLoading) return <Loading></Loading>;
  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center items-start">
      {resp?.data.restaurants.length === 0 ? (
        <p className="text-center">No Restaurants Found</p>
      ) : (
        <>
          {resp?.data.restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </>
      )}
    </div>
  );
};

export default ListRestaurants;
