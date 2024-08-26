"use client";
import { ICartItem, IProduct } from "@/@types/product";
import { useFilterHelp } from "@/hooks/use-filter-help";
import { calculateIsNewProducts } from "@/lib/calculate-is-new-products";
import { useCartStore } from "@/store/cartStore";
import { useFilterStore } from "@/store/filterStore";
import { Heart, Loader, Plus } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import toast from "react-hot-toast";

const CategoryGroupItem: React.FunctionComponent<IProduct> = ({
  name,
  price,
  imageUrl,
  weight,
  id,
  exceptions,
  ingredients,
  createdAt,
}) => {
  const isNewProduct = calculateIsNewProducts(createdAt);
  const {  selectedIngredients } =
    useFilterStore();
  const addItemCart = useCartStore((state) => state.addItemToCart);
  const { exception } = useFilterHelp({
    exceptions: exceptions ?? [],
    ingredients: ingredients ?? [],
    selectedIngredients,
  });
  const [loadingId, setLoadingId] = React.useState<number | null>(null);

  const onClickAddToCart = async () => {
    try {
      setLoadingId(id)
      await addItemCart({
        quantity: 1,
        productId: id,
      });

      toast.success(`${name} - добавлено в корзину`);
    } catch (error) {
      toast.error(`Произошла ошибка при добавлении ${name} в корзину`);
      console.log(error);
    }
    finally {
      setLoadingId(null)
    }
  };



  return (
    <div className="rounded-xl p-6 max-w-[380px] bg-white h-full">
      <div className="relative">
        {isNewProduct && (
          <p className="absolute bg-[#ccf5d5] text-[#00cc2d] text-lg py-1 px-2 rounded-md">
            New
          </p>
        )}
        <Image src={imageUrl} alt={name} width={331} height={290} />
        {exception ? (
          <p className="absolute  bottom-3">
            <Image
              src={`/exceptions/0${exception}.svg`}
              alt={name}
              width={27}
              height={27}
            />
          </p>
        ) : ''}
      </div>
      <div>
        <h3 className="font-bold text-3xl text-black">{name}</h3>
        <p className="text-primary text-lg mt-3">Вес: {weight} г</p>
        <p className="mt-2 text-[#686870] font-normal flex items-center gap-1 flex-wrap">
          {ingredients &&
            ingredients.map((ingredient, index) => (
              <span key={ingredient.id}>{`${index !== 0 ? "," : ""} ${
                ingredient.name
              }`}</span>
            ))}
        </p>
      </div>
      <div className="flex items-center justify-between mt-[72px]">
        <p className="font-bold text-4xl text-black">
          {price} <span className="text-2xl text-[#686870]">руб</span>
        </p>

        <div className="flex items-center gap-3 ">
          <button className="bg-[#f5f5f7] group w-[48px] h-[48px] rounded-xl flex items-center justify-center">
            <Heart
              className="group-hover:stroke-red-600 transition duration-200"
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
      </div>
    </div>
  );
};

export default CategoryGroupItem;
