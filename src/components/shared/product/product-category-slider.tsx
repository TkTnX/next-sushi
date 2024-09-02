"use client";
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryGroupItem from "../category-group-item";
import { IProduct } from "@/@types/product";
import "swiper/css";
import "swiper/css/navigation";

type TCategory = {
  id: number;
  name: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  products: IProduct[];
};

interface IProductCategorySliderProps {
  category: TCategory;
}

const ProductCategorySlider: React.FunctionComponent<
  IProductCategorySliderProps
    > = ({ category }) => {
 
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={20}
    
      className="flex items-stretch mt-8 relative"
    >
      {category &&
        category.products.length > 0 &&
        category.products.map((product) => (
          <SwiperSlide className="h-full" key={product.id}>
            <CategoryGroupItem isNeedToFilter={false} {...product} />
          </SwiperSlide>
        ))}
   
    </Swiper>
  );
};

export default ProductCategorySlider;
