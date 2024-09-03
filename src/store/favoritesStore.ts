import { TFavorites } from "@/components/shared/profile/profile-favorites";
import { Api } from "@/services/api-client";
import { create } from "zustand";

type FavoriteType = {
  id: number;
  userId: number;
  favoriteItem: TFavorites[];
};

interface FavoriteStore {
  favorites: FavoriteType;
  error: boolean;
  loading: boolean;

  getItems: (id: string) => void;
}

export const useFavoriteStore = create<FavoriteStore>()((set) => ({
    favorites: {
    id: 0,
    userId: 0,
    favoriteItem: [],
  },
  loading: true,
  error: false,
  getItems: async (id: string) => {
    try {
      set({ loading: true, error: false });

        const favorites = await Api.favorites.getUserFavorites(Number(id));
        
        set({ favorites: favorites, loading: false });
        
    } catch (error) {
      console.log(error);
      set({ error: true, loading: false });
    } finally {
      set({ loading: false });
    }
  },
}));
