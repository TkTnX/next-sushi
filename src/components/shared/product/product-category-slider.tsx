"use client";
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
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
  const swiperRef = React.useRef<SwiperType>();
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      breakpoints={{
        380: {
          slidesPerView: 1.3,
        },
        525: {
          slidesPerView: 1.8,
        },
        620: {
          slidesPerView: 2.2,
        },
        999: {
          slidesPerView: 3,
        },
        1300: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation]}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
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
          className="h-[50px] md:h-[162px] px-9 bg-[#ebebec]/70 rounded-xl flex items-center justify-center hover:opacity-50 transition duration-200 disabled:hover:opacity-100 disabled:cursor-not-allowed"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ChevronLeft />
        </button>
        <button
          className=" h-[50px] md:h-[162px] px-9 bg-[#ebebec]/70 rounded-xl flex items-center justify-center hover:opacity-50 transition duration-200 disabled:hover:opacity-100 disabled:cursor-not-allowed"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight />
        </button>
      </div>
    </Swiper>
  );
};

export default ProductCategorySlider;
