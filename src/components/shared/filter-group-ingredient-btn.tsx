import Image from 'next/image';
import * as React from 'react';
import FilterGroupIngredientsMore from './filter-group-ingredients-more';
import { IIngredient } from './filter-group-ingredients';

interface IFilterGroupIngredientBtnProps {
    ingredients: IIngredient[];
 }

const FilterGroupIngredientBtn: React.FunctionComponent<
  IFilterGroupIngredientBtnProps
> = ({ingredients}) => {
  return (
    <FilterGroupIngredientsMore ingredients={ingredients}>
      <button className="rounded-xl bg-white p-4">
        <Image
          src={"/ingredients/more.svg"}
          alt="more"
          width={24}
          height={24}
        />
      </button>
    </FilterGroupIngredientsMore>
  );
};

export default FilterGroupIngredientBtn;
