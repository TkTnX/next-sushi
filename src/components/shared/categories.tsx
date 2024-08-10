import * as React from "react";
import CategoryItem from "./categoryItem";
import { categories } from "./constants";

interface ICategoriesProps {}

const Categories: React.FunctionComponent<ICategoriesProps> = (props) => {
  return (
    <div className="max-w-max mt-4 py-1 px-4 rounded-xl flex items-center gap-10 bg-white mx-auto sticky top-4">
      {categories.map((category) => (
        <CategoryItem
          key={category.name}
          imageUrl={category.url}
          name={category.name}
        />
      ))}
    </div>
  );
};

export default Categories;
