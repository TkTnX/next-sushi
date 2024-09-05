import { useAddToCart } from "@/hooks/use-add-to-cart";
import { cn } from "@/lib/utils";
import { addToFavorites, removeFromFavorites } from "@/services/favorites";
import { FavoriteType, useFavoriteStore } from "@/store/favoritesStore";
import { Heart, Loader, Plus } from "lucide-react";
import { useSession } from "next-auth/react";
import * as React from "react";
import toast from "react-hot-toast";

interface ICategoryGroupItemsControlsProps {
  className?: string;
  id: number;
  name: string;
}

const CategoryGroupItemsControls: React.FunctionComponent<
  ICategoryGroupItemsControlsProps
> = ({ className, id, name }) => {
  const { onClickAddToCart, loadingId } = useAddToCart({ id, name });
  const [loadingFavoriteId, setLoadingFavoriteId] = React.useState<number | null>(null);
  const removeFromFavorites = useFavoriteStore((state) => state.removeFromFavorites);
  const { data: session } = useSession();
  const { getItems, favorites } = useFavoriteStore();

  const favoriteItemsIds = favorites.favoriteItem.map((item) => item.productId) ?? [];

  const isFavorite = favoriteItemsIds.includes(id);

  const handleRemoveFromFavorite = async () => {
    try {
      setLoadingFavoriteId(id);
      const data = await removeFromFavorites(id, Number(session?.user.id));
      toast.success("Товар удален из избранного", {
        icon: "🚮",
      });
      await getItems(session?.user.id!);
      setLoadingFavoriteId(null);
      return data;
    } catch (error) {
      console.log(error);
      toast.error("Не удалось удалить из избранного");
    }
  };

  const handleAddToFavorite = async () => {
    try {
      if (favoriteItemsIds.includes(id)) {
        return handleRemoveFromFavorite();
      }
      setLoadingFavoriteId(id);
      const data = await addToFavorites(Number(session?.user.id), id);
      toast.success("Товар добавлен в избранное");

      await getItems(session?.user.id!);
      setLoadingFavoriteId(null);
      return data;
    } catch (error) {
      console.log(error);
      toast.error("Не удалось добавить в избранное");
    }
  };

  return (
    <div className={cn("flex items-center gap-3 ", className)}>
      <button
        disabled={loadingFavoriteId === id}
        onClick={handleAddToFavorite}
        className={cn(
          "bg-[#f5f5f7] group w-[48px] h-[48px] rounded-xl flex items-center justify-center disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary": isFavorite,
          }
        )}
      >
        {loadingFavoriteId === id ? (
          <Loader className="animate-spin" />
        ) : (
          <Heart
            className={cn(
              "group-hover:stroke-red-600 transition duration-200",
              {
                "fill-white stroke-white": isFavorite,
              }
            )}
            size={24}
          />
        )}
      </button>
      <button
        onClick={onClickAddToCart}
        className="w-[76px] group bg-[#ccf5d5] rounded-xl flex justify-center items-center h-[48px]"
      >
        {!loadingId ? (
          <Plus
            className="group-hover:rotate-45 transition duration-200"
            size={28}
          />
        ) : (
          <Loader className="animate-spin" />
        )}
      </button>
    </div>
  );
};

export default CategoryGroupItemsControls;
