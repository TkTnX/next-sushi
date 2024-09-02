import { useCartStore } from "@/store/cartStore";
import { useState } from "react";
import toast from "react-hot-toast";

interface IUseAddToCartProps {
    id: number;
    name: string
}

export const useAddToCart = ({ id, name }: IUseAddToCartProps) => {
  const [loadingId, setLoadingId] = useState<number | null>(null);
  const addItemCart = useCartStore((state) => state.addItemToCart);

  const onClickAddToCart = async () => {
    try {
      setLoadingId(id);
      await addItemCart({
        quantity: 1,
        productId: id,
      });

      toast.success(`${name} - добавлено в корзину`);
    } catch (error) {
      toast.error(`Произошла ошибка при добавлении ${name} в корзину`);
      console.log(error);
    } finally {
      setLoadingId(null);
    }
    };
    
    return {
        onClickAddToCart,
        loadingId
    }
};
