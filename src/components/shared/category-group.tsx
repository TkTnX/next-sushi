import { IProduct } from '@/@types/product';
import Link from 'next/link';
import * as React from 'react';
import CategoryGroupItem from './category-group-item';

interface ICategoryGroupProps {
    title: string,
    link: string,
  items: IProduct[];
  categoryId: number;
}

const CategoryGroup: React.FunctionComponent<ICategoryGroupProps> = ({ title, link, items, categoryId }) => {
  
    return (
      <section id={title}>
        <div className="flex items-center justify-between mt-[124px]">
          <h2 className="font-bold text-5xl text-black">{title}</h2>
          <Link
            href={link}
            className="block text-secondary font-bold rounded-xl py-3 px-6 bg-white hover:bg-secondary hover:text-white transition duration-200"
          >
            Все {title}
          </Link>
        </div>

        <ul className='mt-8 grid grid-cols-4 gap-5 items-stretch'>
          {items.filter((item) => item.categoryId === categoryId).map((item) => (
            <li key={item.id}>
              <CategoryGroupItem isNeedToFilter={false} {...item} />
            </li>
          ))}
        </ul>
      </section>
    );
};

export default CategoryGroup;
