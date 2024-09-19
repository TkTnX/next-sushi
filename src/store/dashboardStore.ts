import { addNewNewsItem, editNewsItem } from "@/app/actions";
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
  editNewsItem: (data: AddNewsItemFormData, id: number) => void;
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
      await Api.news.getAllNews();
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

      await Api.news.getAllNews();
      set((state) => ({ news: [...state.news, newNewsItem] }));
    } catch (error) {
      console.log(error);
      set({ news: [] });
    } finally {
      set({ loading: false });
    }
  },

  editNewsItem: async (data, id) => {
    try {
      set({ loading: true });
      await editNewsItem(data, id);

      await Api.news.getAllNews();
    } catch (error) {
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },
}));
