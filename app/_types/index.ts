import { STORE_CATEGORY } from "@prisma/client";

export type StoreCategoryKey = keyof typeof STORE_CATEGORY;

export type TextByStoreCategoryObject = {
  [key in STORE_CATEGORY]: string;
};
