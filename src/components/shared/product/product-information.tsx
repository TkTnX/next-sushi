"use client";
import Image from "next/image";
import * as React from "react";
import CategoryGroupItemIsNew from "../category-group-item-is-new";
import { IProduct } from "@/@types/product";
import { calculateIsNewProducts } from "@/lib/calculate-is-new-products";
import CategoryGroupItemException from "../category-group-item-exception";
import CategoryGroupItemsControls from "../category-group-item-controls";

interface IProductInformationProps {
  product: IProduct;
}

const ProductInformation: React.FunctionComponent<IProductInformationProps> = ({
  product,
}) => {
  const isNewProduct = calculateIsNewProducts(product.createdAt);

  return (
    <div>
      <div>
        {isNewProduct && (
          <CategoryGroupItemIsNew className="static max-w-max" />
        )}
      </div>
      <h2 className="text-4xl xl:text-6xl font-bold mt-2">{product.name}</h2>
      <p className="text-primary text-xl xl:text-2xl font-medium mt-4">
        Вес: {product.weight}г
      </p>
      {product.ingredients && (
        <div className="mt-6">
          {product.categoryId !== 5 && (
            <>
              <p className="font-medium">Состав:</p>
              <ul className="flex items-center gap-2 mt-3 flex-wrap">
                {product.ingredients.map((ingredient) => (
                  <li
                    className="flex flex-col items-center justify-center gap-2 p-3 bg-white rounded-md"
                    key={ingredient.id}
                  >
                    <Image
                      src={ingredient.imageUrl}
                      alt={ingredient.name}
                      width={74}
                      height={50}
                    />
                    <p className="text-sm">{ingredient.name}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
      {product.exceptions && product.categoryId !== 5 && (
        <CategoryGroupItemException
          exception={product.exceptions[0].exceptionId}
          className="static mt-4"
        />
      )}
      <div className="mt-9 flex items-center gap-4">
        <h6 className="text-5xl font-bold">
          {product.price} <span className="text-[#686870] text-3xl">руб</span>
        </h6>
        <CategoryGroupItemsControls name={product.name} id={product.id} />
      </div>
    </div>
  );
};

export default ProductInformation;
