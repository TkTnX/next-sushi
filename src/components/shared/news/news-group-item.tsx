import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { INews } from "./news-group";

type INewsGroupItemProps = {
  newsItem: INews;
  isBigNew: boolean;
};

const NewsGroupItem: React.FunctionComponent<INewsGroupItemProps> = ({
  newsItem,
  isBigNew,
}) => {
  return (
    <div key={newsItem.id} className="bg-white">
      <Link href={`/news/${newsItem.id}`}>
        <Image
          src={newsItem.image}
          width={isBigNew ? 778 : 380}
          height={isBigNew ? 446 : 200}
          alt={newsItem.title}
          className="bg-[#d6d6d6] rounded-t-md"
        />
      </Link>
      <div className="p-4 rounded-b-md">
        <div className="flex items-center justify-between">
          <p className="text-[#686870] text-sm py-1 px-2 bg-[#F5F5F7] rounded-lg max-w-max">
            {newsItem.category}
          </p>
          <p className="text-[#9E9E9E] text-sm">
            {new Date(newsItem.createdAt).toLocaleDateString()}
          </p>
        </div>
        <h3 className="font-bold text-lg mt-2">{newsItem.title}</h3>
        <Link
          href={`/news/${newsItem.id}`}
          className="text-secondary text-sm mt-1 block"
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
};

export default NewsGroupItem;
