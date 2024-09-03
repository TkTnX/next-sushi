import { getUserSession } from "@/lib/get-user-session";
import { axiosInstance } from "./axios";

export const getUserFavorites = async (userId: number) => {
  try {
    if (!userId) {
      throw Error();
    }
    return (await axiosInstance.get(`/favorites?userId=${userId}`)).data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const addToFavorites = async (userId: number, productId: number) => {
  try {
    if (!userId || !productId) {
      throw Error();
    }

    console.log({productId, userId})
    const { data } = await axiosInstance.post(`/favorites/${productId}`, {
      userId,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
