import { axiosInstance } from "./axios";

export async function getAddresses() {
  try {
    return (await axiosInstance.get("/address")).data;
  } catch (error) {
    console.log(error);
  }
}

export async function addAddress(name: string) {
  try {
    return (await axiosInstance.post("/address", { name })).data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteAddress(id: number) {
  try {
    return (await axiosInstance.delete(`/address/${id}`)).data;
  } catch (error) {
    console.log(error);
  }
}
