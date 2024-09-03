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
