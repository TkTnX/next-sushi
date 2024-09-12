import { INews } from "@/components/shared/news/news-group";
import { Api } from "@/services/api-client";
import { create } from "zustand";

interface DashboardState {
  loading: boolean,
  news: INews[],
  getNews: () => void

    
}

export const useDashboardStore = create<DashboardState>()((set) => ({
  loading: true,
  news: [],
  getNews: async () => {
    try {
      set({ loading: true });
      
      const news = await Api.news.getAllNews();

      set({ news })
    } catch (error) {
      console.log(error)
    } finally {
      set({ loading: false })
    }
  }
}));
