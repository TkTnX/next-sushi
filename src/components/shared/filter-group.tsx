import * as React from 'react';
import FilterGroupExceptions from './filter-group-exceptions';
import FilterGroupIngredients from './filter-group-ingredients';
import { Api } from '@/services/api-client';



const FilterGroup: React.FunctionComponent = async () => {
  const exceptions = await Api.types.getAllExceptions()
  const ingredients = await Api.types.getAllIngredients()
    return (
      <div className="flex flex-col items-baseline 2xl:items-center 2xl:flex-row justify-between mt-6">
        {exceptions && <FilterGroupExceptions exceptions={exceptions.data} />}
        {ingredients && <FilterGroupIngredients ingredients={ingredients.data} />}
      </div>
    );
};

export default FilterGroup;
