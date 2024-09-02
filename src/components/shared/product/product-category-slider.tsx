"use client";
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CategoryGroupItem from "../category-group-item";
import { IProduct } from "@/@types/product";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const prevSlide = React.useRef(null);
  const nextSlide = React.useRef(null);
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={20}
      modules={[Navigation]}
      navigation={{
        prevEl: prevSlide.current,
        nextEl: nextSlide.current,
      }}
      onBeforeInit={(swiper) => {
        if (
          swiper.params.navigation &&
          typeof swiper.params.navigation === "object"
        ) {
          swiper.params.navigation.prevEl = prevSlide.current;
          swiper.params.navigation.nextEl = nextSlide.current;
        }
      }}
      className="flex items-stretch mt-8"
    >
      {category &&
        category.products.length > 0 &&
        category.products.map((product) => (
          <SwiperSlide className="h-full" key={product.id}>
            <CategoryGroupItem isNeedToFilter={false} {...product} />
          </SwiperSlide>
        ))}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex items-center justify-between z-[1]">
        <button
          className="h-[162px] px-9 bg-[#ebebec]/70 rounded-xl flex items-center justify-center hover:opacity-50 transition duration-200 disabled:hover:opacity-100 disabled:cursor-not-allowed"
          ref={prevSlide}
        >
          <ChevronLeft />
        </button>
        <button
          className="h-[162px] px-9 bg-[#ebebec]/70 rounded-xl flex items-center justify-center hover:opacity-50 transition duration-200 disabled:hover:opacity-100 disabled:cursor-not-allowed"
          ref={nextSlide}
        >
          <ChevronRight />
        </button>
      </div>
    </Swiper>
  );
};

export default ProductCategorySlider;
