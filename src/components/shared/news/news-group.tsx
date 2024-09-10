import { Api } from "@/services/api-client";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import NewsGroupItem from "./news-group-item";

interface INewsGroupProps {}

export type INews = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  createdAt: string;
};

const NewsGroup: React.FunctionComponent<INewsGroupProps> = async (props) => {
  const news = await Api.news.getAllNews();

  if (!news) return <p>Не удалось получить новости!</p>;

  return (
    <div className="mt-6">
      <div className="grid grid-cols-2 gap-5">
        <NewsGroupItem newsItem={news[0]} isBigNew={true} />
        <NewsGroupItem newsItem={news[1]} isBigNew={true} />
      </div>
      <div className="mt-5 grid grid-cols-4 gap-5">
        {news.slice(2).map((newsItem) => (
          <NewsGroupItem
            key={newsItem.id}
            newsItem={newsItem}
            isBigNew={false}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsGroup;
