import * as React from "react";
import CategoryItem from "./categoryItem";
import { IProduct } from "@/@types/product";

type categoryType = {
  name: string;
  imageUrl: string;
  products: IProduct[];
};

interface ICategoriesProps {
  categories: categoryType[];
}

const Categories: React.FunctionComponent<ICategoriesProps> = ({
  categories,
}) => {

  return (
    <div className="max-w-max mt-4 py-1 px-4 rounded-xl flex items-center gap-10 bg-white mx-auto sticky top-4 z-10">
      {categories.filter((category) => category.products.length > 0).map((category) => (
    
        <CategoryItem
          key={category.name}
          imageUrl={category.imageUrl}
          name={category.name}
        />
      ))}
    </div>
  );
};

export default Categories;
