import { useAddToCart } from '@/hooks/use-add-to-cart';
import { cn } from '@/lib/utils';
import { useCartStore } from '@/store/cartStore';
import { Heart, Loader, Plus } from 'lucide-react';
import * as React from 'react';

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
  return (
    <div className={cn("flex items-center gap-3 ", className)}>
      <button
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
