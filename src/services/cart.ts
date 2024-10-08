import { prisma } from "@/Prisma/prisma-client";
import { axiosInstance } from "./axios";
import { ApiRoutes } from "./constants";
import { ICartItem } from "@/@types/product";

export const getCart = async () => {
  try {
    return await (axiosInstance.get(ApiRoutes.CART));
  } catch (error) {
    console.log(error);
  }
};


export const updateItemQuantity = async (id: number, quantity: number): Promise<any> => {
  return (await axiosInstance.patch("/cart/" + id, {
    quantity
  })).data
}

export const deleteItem = async (id: number) => {
  return (await axiosInstance.delete("/cart/" + id)).data
}

export const addToCart = async (values: ICartItem) => {
  return (await axiosInstance.post(ApiRoutes.CART, values)).data
}