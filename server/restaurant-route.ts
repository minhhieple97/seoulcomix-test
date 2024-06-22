import { updateFavoriteSchema } from './restaurant-schema';
import { getRestaurants, updateFavorite } from './restaurant-controller';
import { t } from '@/utils/trpc-server';

const restaurantRoute = t.router({
  updateFavorite: t.procedure
    .input(updateFavoriteSchema)
    .mutation(({ input }) => updateFavorite({ input })),
  getRestaurants: t.procedure.query(() => getRestaurants()),
});

export default restaurantRoute;
