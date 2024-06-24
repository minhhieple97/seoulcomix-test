import prisma from "@/prisma/prisma-client";
import { TRPCError } from "@trpc/server";
import { UpdateFavoriteInput } from "./restaurant-schema";

export const getRestaurants = async () => {
  try {
    const restaurants = await prisma.restaurant.findMany({
    });
    return {
      status: "success",
      restaurants,
    };
  } catch (err: any) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: err.message,
    });
  }
};

export const updateFavorite = async ({
  input,
}: {
  input: UpdateFavoriteInput;
}) => {
  try {
    const restaurant = await prisma.restaurant.update({
      where: {
        id: input.id,
      },
      data: {
        isFavorite: input.favorite,
      },
    });
    return {
      status: "success",
      restaurant,
    };
  } catch (err: any) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: err.message,
    });
  }
};
