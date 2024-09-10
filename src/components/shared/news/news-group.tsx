"use client";
import * as React from "react";
import NewsGroupItem from "./news-group-item";
import { useNewsStore } from "@/store/newsStore";

interface INewsGroupProps {}

export type INews = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  createdAt: string;
};

const NewsGroup: React.FunctionComponent<INewsGroupProps> = () => {
  const { loading, news, getNews, inputValue } = useNewsStore();
  React.useEffect(() => {
    getNews();
  }, []);

  if (loading) return <p className="mt-10">Загрузка...</p>;

  if (!news && !loading) return <p>Не удалось получить новости!</p>;
  return (
    <div className="mt-6">
      <div className="grid sm:grid-cols-2 gap-5">
        <NewsGroupItem newsItem={news[0]} isBigNew={true} />
        <NewsGroupItem newsItem={news[1]} isBigNew={true} />
      </div>
      <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {news
          .slice(2)
          .filter((newsItem) =>
            newsItem.title.toLowerCase().includes(inputValue.toLowerCase())
          )
          .map((newsItem) => (
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
