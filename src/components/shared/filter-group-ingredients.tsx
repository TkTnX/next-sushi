"use client";
import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import FilterGroupIngredientBtn from "./filter-group-ingredient-btn";
import { useQueryParams } from "@/hooks/use-query-params";
import { useFilterStore } from "@/store/filterStore";
export type IIngredient = {
  id: number;
  name: string;
  imageUrl: string;
};

interface IFilterGroupIngredientsProps {
  ingredients: IIngredient[];
}

const FilterGroupIngredients: React.FunctionComponent<
  IFilterGroupIngredientsProps
> = ({ ingredients }) => {
  const { selectedIngredients, setSelectedIngredients } = useQueryParams();
  const disabled = useFilterStore((state) => state.disabled);

  return (
    <ul
      className={cn("flex items-center gap-2 mt-8", {
        "opacity-50 pointer-events-none": disabled,
      })}
    >
      {ingredients.slice(0, 4).map((ingredient, index) => (
        <li
          className="hidden first:block   sm:even:hidden md:block"
          key={index}
        >
          <button
            onClick={() => setSelectedIngredients(ingredient.id)}
            className={cn(
              "flex items-center border-2 border-white gap-2 bg-white rounded-xl py-2 px-3 text-black hover:bg-slate-100 hover:bg-opacity-80 transition duration-200",
              selectedIngredients.includes(ingredient.id) && "border-primary"
            )}
          >
            <Image
              src={ingredient.imageUrl}
              alt={ingredient.name}
              width={56}
              height={32}
            />
            <span>{ingredient.name}</span>
          </button>
        </li>
      ))}
      <li>
        <FilterGroupIngredientBtn ingredients={ingredients} />
      </li>
    </ul>
  );
};

export default FilterGroupIngredients;
