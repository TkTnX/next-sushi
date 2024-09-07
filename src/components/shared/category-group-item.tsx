"use client";
import { IProduct } from "@/@types/product";
import { useFilterHelp } from "@/hooks/use-filter-help";
import { calculateIsNewProducts } from "@/lib/calculate-is-new-products";
import { useFilterStore } from "@/store/filterStore";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import CategoryGroupItemIsNew from "./category-group-item-is-new";
import CategoryGroupItemException from "./category-group-item-exception";
import CategoryGroupItemsControls from "./category-group-item-controls";

type Props = {};

const CategoryGroupItem: React.FunctionComponent<IProduct & Props> = ({
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
  const { selectedIngredients } = useFilterStore();
  const { exception } = useFilterHelp({
    exceptions: exceptions ?? null,
    ingredients: ingredients ?? [],
    selectedIngredients,
  });

  return (
    <div className="rounded-xl p-6 sm:max-w-[380px] bg-white h-full ">
      <div className="relative">
        {isNewProduct && <CategoryGroupItemIsNew />}
        <Link href={`/products/${id}`}>
          <Image className="mx-auto sm:mx-0" src={imageUrl} alt={name} width={331} height={290} />
        </Link>
        {exception ? <CategoryGroupItemException exception={exception} /> : ""}
      </div>
      <div>
        <h3 className="font-bold text-xl md:text-3xl text-black">{name}</h3>
        <p className="text-primary text-sm md:text-lg mt-3">Вес: {weight} г</p>
        <p className="mt-2 text-[#686870] font-normal flex items-center gap-1 flex-wrap">
          {ingredients &&
            ingredients.map((ingredient, index) => (
              <span key={ingredient.id}>{`${index !== 0 ? "," : ""} ${
                ingredient.name
              }`}</span>
            ))}
        </p>
      </div>
      <div className="flex lg:items-center lg:flex-row  justify-between mt-2 md:mt-[72px] flex-col items-start gap-2 lg:gap-0">
        <p className="font-bold text-2xl md:text-4xl text-black">
          {price} <span className=" text-lg md:text-2xl text-[#686870]">руб</span>
        </p>

        <CategoryGroupItemsControls name={name} id={id} />
      </div>
    </div>
  );
};

export default CategoryGroupItem;
