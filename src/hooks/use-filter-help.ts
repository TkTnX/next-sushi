import { IIngredient } from "@/components/shared/filter-group-ingredients";
import { useEffect, useState } from "react";

interface IFilterHelp {
  exceptions: { productId: number; exceptionId: number }[];
  ingredients: IIngredient[];
  selectedIngredients: number[];
}

interface ReturnFilterHelp {
  exception: number;
  checkIngredient: boolean;
}

export const useFilterHelp = ({
  exceptions,
  ingredients,
  selectedIngredients,
}: IFilterHelp): ReturnFilterHelp => {
  const [result, setResult] = useState<ReturnFilterHelp>({
    exception: 0,
    checkIngredient: false,
  });
  useEffect(() => {
    const exception = exceptions ? exceptions[0].exceptionId : 0;

    const checkIngredient = !selectedIngredients.some((id) =>
      ingredients.some((ingredient) => ingredient.id === id)
    );

    setResult({ exception, checkIngredient });
  }, [selectedIngredients]);
  return result;
};
