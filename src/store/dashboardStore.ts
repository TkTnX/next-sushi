import { addNewNewsItem } from "@/app/actions";
import { AddNewsItemFormData } from "@/components/shared/forms/schemas";
import { INews } from "@/components/shared/news/news-group";
import { Api } from "@/services/api-client";
import { deleteNewsItem } from "@/services/news";
import { create } from "zustand";

interface DashboardState {
  loading: boolean;
  news: INews[];
  getNews: () => void;
  deleteNewsItem: (id: number) => void;
  addNewsItem: (data: AddNewsItemFormData) => void;
}

export const useDashboardStore = create<DashboardState>()((set) => ({
  loading: true,
  news: [],
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
  deleteNewsItem: async (id) => {
    try {
      set({ loading: true });
      await deleteNewsItem(id);
      set((state) => ({ news: state.news.filter((item) => item.id !== id) }));
    } catch (error) {
      console.log(error);
      set({ news: [] });
    } finally {
      set({ loading: false });
    }
  },
  addNewsItem: async (data) => {
    try {
      set({ loading: true });
      const newNewsItem = await addNewNewsItem(data);
      if (!newNewsItem) return set({ news: [] });

      set((state) => ({ news: [...state.news, newNewsItem] }));
    } catch (error) {
      console.log(error);
      set({ news: [] });
    } finally {
      set({ loading: false });
    }
  },
}));
