"use client";
import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { IIngredient } from "./filter-group-ingredients";
import Image from "next/image";
import { useFilterStore } from "@/store/filterStore";
import { cn } from "@/lib/utils";

interface IFilterGroupIngredientsMoreProps {
  ingredients: IIngredient[];
}

const FilterGroupIngredientsMore: React.FunctionComponent<
  React.PropsWithChildren<IFilterGroupIngredientsMoreProps>
> = ({ children, ingredients }) => {
  const setSelectedIngredients = useFilterStore(
    (state) => state.setSelectedIngredients
  );
  const selectedIngredients = useFilterStore(
    (state) => state.selectedIngredients
    );
    
const handleResetIngredients = () => {
  ingredients.forEach((ingredient) => {
    setSelectedIngredients(ingredient.id);
  });
};

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="mt-4 w-[846px]   p-8 absolute right-0">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl text-black">Ингредиенты</h2>
          <button
            disabled={!(selectedIngredients.length === 0)}
            onClick={handleResetIngredients}
            className="text-primary"
          >
            Сбросить все
          </button>
        </div>

        <ul className="flex items-center flex-wrap gap-4 mt-6">
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              <button
                onClick={() => setSelectedIngredients(ingredient.id)}
                className={cn(
                  "flex items-center border-2 border-white gap-2 bg-white rounded-xl py-2 px-3 text-black hover:bg-slate-100  hover:bg-opacity-80  transition duration-200",
                  selectedIngredients.includes(ingredient.id) &&
                    " border-primary"
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
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default FilterGroupIngredientsMore;
