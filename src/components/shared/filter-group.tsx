import * as React from 'react';
import FilterGroupExceptions from './filter-group-exceptions';
import FilterGroupIngredients from './filter-group-ingredients';

interface IFilterGroupProps {
}

const FilterGroup: React.FunctionComponent<IFilterGroupProps> = (props) => {
    return (
      <div className="flex items-center justify-between mt-6">
        <FilterGroupExceptions />
        <FilterGroupIngredients />
      </div>
    );
};

export default FilterGroup;
