import { useAddToCart } from '@/hooks/use-add-to-cart';
import { cn } from '@/lib/utils';
import { addToFavorites } from '@/services/favorites';
import { useCartStore } from '@/store/cartStore';
import { Heart, Loader, Plus } from 'lucide-react';
import * as React from 'react';
import toast from 'react-hot-toast';

interface ICategoryGroupItemsControlsProps {
  className?: string;
  id: number;
  name: string;
  isFavorite?: boolean;
}

const CategoryGroupItemsControls: React.FunctionComponent<
  ICategoryGroupItemsControlsProps
> = ({ className, id, name, isFavorite }) => {
  const { onClickAddToCart, loadingId } = useAddToCart({ id, name });
  const handleAddToFavorite = async () => {
    try {
      if (isFavorite) {
        throw Error;
      }
      
      const data = await addToFavorites(17, id);

      toast.success("Товар добавлен в избранное");

      return data
    } catch (error) {
      console.log(error)
    }
    
    
  }
  return (
    <div className={cn("flex items-center gap-3 ", className)}>
      <button onClick={handleAddToFavorite}
        className={cn(
          "bg-[#f5f5f7] group w-[48px] h-[48px] rounded-xl flex items-center justify-center",
          {
            "bg-primary": isFavorite,
          }
        )}
      >
        <Heart
          className={cn("group-hover:stroke-red-600 transition duration-200", {
            "fill-white stroke-white" : isFavorite
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
