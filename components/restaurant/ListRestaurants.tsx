"use client";
import React from "react";
import Loading from "@/app/loading";
import { trpc } from "@/utils/trpc";
import { RestaurantCard } from "./RestaurantCard";

export const ListRestaurants = () => {
  const { data, isLoading } = trpc.getRestaurants.useQuery();
  if (isLoading) return <Loading></Loading>;
  return (
    <div className="flex flex-col flex-wrap items-start justify-center gap-6 md:flex-row">
      {data?.restaurants.length === 0 ? (
        <p className="text-center">No Restaurants Found</p>
      ) : (
        <>
          {data?.restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </>
      )}
    </div>
  );
};
