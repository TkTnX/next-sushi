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
