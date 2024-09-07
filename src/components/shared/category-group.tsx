"use client";
import { IProduct } from "@/@types/product";
import Link from "next/link";
import * as React from "react";
import CategoryGroupItem from "./category-group-item";

interface ICategoryGroupProps {
  title: string;
  link: string;
  items: IProduct[];
  categoryId: number;
}

const CategoryGroup: React.FunctionComponent<ICategoryGroupProps> = ({
  title,
  link,
  items,
  categoryId,
}) => {
  return (
    <section id={title}>
      <div className="flex items-center justify-between mt-[124px]">
        <h2 className="font-bold text-3xl sm:text-5xl text-black">{title}</h2>
        <Link
          href={`${link}?type=1&exceptions=0`}
          className="block text-secondary font-bold rounded-md sm:rounded-xl py-1 sm:py-3 px-3 sm:px-6 bg-white hover:bg-secondary hover:text-white transition duration-200"
        >
          Все {title}
        </Link>
      </div>

      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 items-stretch">
        {items
          .filter((item) => item.categoryId === categoryId)
          .map((item) => (
            <li key={item.id}>
              <CategoryGroupItem isNeedToFilter={false} {...item} />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default CategoryGroup;
