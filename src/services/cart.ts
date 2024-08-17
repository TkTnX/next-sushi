import { axiosInstance } from "./axios";
import { ApiRoutes } from "./constants";

export const getCart = async () => {
  try {
    return await (axiosInstance.get(ApiRoutes.CART));
  } catch (error) {
    console.log(error);
  }
};
