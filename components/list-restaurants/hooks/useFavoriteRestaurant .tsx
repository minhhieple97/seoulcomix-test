import { trpc } from "@/utils/trpc";
import { useState } from "react";

export const useFavoriteRestaurant = (
  restaurantId: string,
  initialIsFavorite: boolean,
) => {
  const [isFavoriteVal, setIsFavoriteVal] = useState(initialIsFavorite);
  const { mutate, isLoading } = trpc.updateFavorite.useMutation({
    onSuccess: (resp) => {
      setIsFavoriteVal(resp.data.isFavorite);
    },
  });

  const toggleFavorite = () => {
    mutate({ id: restaurantId, favorite: !isFavoriteVal });
  };

  return { isFavoriteVal, toggleFavorite, isLoading };
};
