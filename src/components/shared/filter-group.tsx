import * as React from 'react';
import FilterGroupExceptions from './filter-group-exceptions';
import FilterGroupIngredients from './filter-group-ingredients';
import { Api } from '@/services/api-client';

interface IFilterGroupProps {
}

const FilterGroup: React.FunctionComponent<IFilterGroupProps> = async (props) => {
  const exceptions = await Api.types.getAllExceptions()
    return (
      <div className="flex items-center justify-between mt-6">
        {exceptions && <FilterGroupExceptions exceptions={exceptions.data} />}
        <FilterGroupIngredients />
      </div>
    );
};

export default FilterGroup;
