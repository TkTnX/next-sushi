import { TFavorites } from "@/components/shared/profile/profile-favorites";
import { Api } from "@/services/api-client";
import { removeFromFavorites } from "@/services/favorites";
import { create } from "zustand";

export type FavoriteType = {
  id: number;
  userId: number;
  favoriteItem: TFavorites[];
};

interface FavoriteStore {
  favorites: FavoriteType;
  error: boolean;
  loading: boolean;

  getItems: (id: string) => void;
  removeFromFavorites: (id: number, userId: number) => void;
}

export const useFavoriteStore = create<FavoriteStore>()((set) => ({
  favorites: {
    id: 0,
    userId: 0,
    favoriteItem: [],
  },
  loading: true,
  error: false,
  getItems: async (id) => {
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

  removeFromFavorites: async (id, userId) => {
    try {
      if (!userId || !id) {
        throw Error();
      }

      set({ loading: true, error: false });
      await removeFromFavorites(Number(userId), id);

      set((state) => ({
        favorites: {
          ...state.favorites,
          favoriteItem: state.favorites.favoriteItem.filter(
            (item) => item.productId !== id
          ),
        },
      }))

    } catch (error) {
      console.log(error);
      set({ error: true, loading: false });
    } finally {
      set({ loading: false });
    }
  },
}));
