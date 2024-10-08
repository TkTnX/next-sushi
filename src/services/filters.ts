import { ITypesProps } from "@/components/shared/types";
import { axiosInstance } from "./axios";
import { ApiRoutes } from "./constants";

export const getAllTypes = async () => {
  try {
    return await axiosInstance.get<ITypesProps[]>(ApiRoutes.TYPES);
  } catch (error) {
    console.log(error);
  }
};


export const getAllExceptions = async () => {
  try {
    return await axiosInstance.get(ApiRoutes.EXCEPTIONS);
  } catch (error) {
    console.log(error);
  }
}


export const getAllIngredients = async () => {
  try {
    return await axiosInstance.get(ApiRoutes.INGREDIENTS);
  } catch (error) {
    console.log(error);
  }
};
