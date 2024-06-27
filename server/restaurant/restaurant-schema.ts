import { TypeOf, boolean, object, string } from 'zod';

export const updateFavoriteSchema = object({
  id: string(),
  favorite: boolean(),
});

export type UpdateFavoriteInput = TypeOf<typeof updateFavoriteSchema>;
