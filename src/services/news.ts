import { INews } from "@/components/shared/news/news-group"
import { axiosInstance } from "./axios"

export async function getAllNews() {
    try {
        const news = (await axiosInstance.get<INews[]>("/news")).data

        return news
    } catch (error) {
        console.log(error)
    }
}