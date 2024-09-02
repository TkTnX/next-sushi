import { IProduct } from "@/@types/product";
import { axiosInstance } from "./axios";
import { ApiRoutes } from "./constants";

export const getAllProducts = async () => {
  try {
    return await axiosInstance.get<IProduct[]>(ApiRoutes.PRODUCTS);
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id: number) => {
  try {
    return (await axiosInstance.get<IProduct>(`/products/${id}`)).data
  } catch (error) {
    console.log(error)
  }
}