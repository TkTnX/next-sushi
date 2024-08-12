"use client"
import * as React from "react";
import { ingredients } from "./constants";
import Image from "next/image";
import { useSet } from "react-use";
import { cn } from "@/lib/utils";

interface IFilterGroupIngredientsProps {}

const FilterGroupIngredients: React.FunctionComponent<
  IFilterGroupIngredientsProps
    > = () => {
        const [set, { toggle }] = useSet(new Set([1,2,3,4]))
        
   
  return (
    <ul className="flex items-center gap-4">
      {ingredients.slice(0, 4).map((ingredient, index) => (
        <li key={index}>
          <button
            onClick={() => toggle(ingredient.id)}
            className={cn(
              "flex items-center border-2 border-white gap-2 bg-white rounded-xl py-2 px-3 text-black hover:bg-slate-100  hover:bg-opacity-80  transition duration-200",
              set.has(ingredient.id) && " border-primary"
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
  );
};

export default FilterGroupIngredients;
