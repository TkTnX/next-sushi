import { axiosInstance } from "./axios";

export async function deleteUser(id: number) { 
    return (await axiosInstance.delete(`/users/${id}`)).data
}

export async function getUsers() {
    return (await axiosInstance.get("/users")).data
}