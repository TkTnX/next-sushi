import { Order } from "@prisma/client";
import { axiosInstance } from "./axios";

export const getOrder = async (id: number) => {
  try {
    return (await axiosInstance.get(`/order/${id}`)).data;
  } catch (error) {
    console.log(error);
  }
};


