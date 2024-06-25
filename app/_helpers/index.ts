import { JsonValue } from "@prisma/client/runtime/library";

export const capitalizeFirstLetter= (str: string): string => {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}


export const getRestaurantImage = (images: string[] | undefined|JsonValue): string => {
  return images && Array.isArray(images) && typeof images[0] === "string"
    ? images[0]
    : "/not-found.png";
};
