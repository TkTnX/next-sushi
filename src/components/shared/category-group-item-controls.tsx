import { useAddToCart } from "@/hooks/use-add-to-cart";
import { cn } from "@/lib/utils";
import { addToFavorites, removeFromFavorites } from "@/services/favorites";
import { FavoriteType } from "@/store/favoritesStore";
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
  const { data: session } = useSession();

  const handleAddToFavorite = async () => {
    try {
      // if (favorites?.includes(id)) {
      //   throw Error;
      // }

      const data = await addToFavorites(Number(session?.user.id), id);
      toast.success("Товар добавлен в избранное");
      return data;
    } catch (error) {
      console.log(error);
      toast.error("Не удалось добавить в избранное");
    }
  };

  const handleRemoveFromFavorite = async () => {
    try {
      const data = await removeFromFavorites(Number(session?.user.id), id);
      toast.success("Товар удален из избранного");

      return data;
    } catch (error) {
      console.log(error);
      toast.error("Не удалось удалить из избранного");
    }
  };

  return (
    <div className={cn("flex items-center gap-3 ", className)}>
      <button onClick={handleRemoveFromFavorite}>test btn</button>
      <button
        onClick={handleAddToFavorite}
        className={cn(
          "bg-[#f5f5f7] group w-[48px] h-[48px] rounded-xl flex items-center justify-center",
          {
            // "bg-primary": favoriteItems?.includes(id),
          }
        )}
      >
        <Heart
          className={cn("group-hover:stroke-red-600 transition duration-200", {
            // "fill-white stroke-white": favoriteItems?.includes(id),
          })}
          size={24}
        />
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
