"use client";
import { Api } from "@/services/api-client";
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CategoryGroupItem from "../category-group-item";
import { IProduct } from "@/@types/product";

interface ICheckoutDopsProps {}

const CheckoutDops: React.FunctionComponent<ICheckoutDopsProps> = (props) => {
  const [dops, setDops] = React.useState<IProduct[]>([]);
  React.useEffect(() => {
    async function getDops() {
      const products = await Api.products.getAllProducts();
      if (!products || !products.data) return;

      setDops(products.data.filter((item) => item.categoryId === 5));
    }

    getDops();
  }, []);

  return (
    <div>
      <h5 className="font-bold text-2xl">Рекомендуем добавить</h5>

      <Swiper
        className="mt-6 "
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          380: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          560: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          888: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
      >
        {dops.map((item) => (
          <SwiperSlide key={item.id}>
            <CategoryGroupItem {...item} isDops={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CheckoutDops;
