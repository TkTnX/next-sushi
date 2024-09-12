import { INews } from "@/components/shared/news/news-group";
import { Api } from "@/services/api-client";
import { create } from "zustand";

interface NewsState {
  inputValue: string;
  news: INews[];
  loading: boolean;
  setInputValue: (inputValue: string) => void;
  getNews: () => void;
}

export const useNewsStore = create<NewsState>()((set) => ({
  inputValue: "",
  news: [],
  loading: true,
  setInputValue: (inputValue) => set({ inputValue }),
  getNews: async () => {
    try {
      set({ loading: true });
      const news = await Api.news.getAllNews();

      set({ news });
    } catch (error) {
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },

}));
