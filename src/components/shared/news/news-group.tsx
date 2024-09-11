"use client";
import * as React from "react";
import NewsGroupItem from "./news-group-item";
import { useNewsStore } from "@/store/newsStore";
import { Skeleton } from "@/components/ui/skeleton";

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


  if (!news && !loading) return <p>Не удалось получить новости!</p>;
  return (
    <div className="mt-6">
      <div className="grid sm:grid-cols-2 gap-5">
        {loading ? (
          <Skeleton className="w-full h-[556px] bg-[#cbcbcd] animate-pulse" />
        ) : (
          <NewsGroupItem newsItem={news[0]} isBigNew={true} />
        )}
        {loading ? (
          <Skeleton className="w-full h-[556px] bg-[#cbcbcd] animate-pulse" />
        ) : (
          <NewsGroupItem newsItem={news[1]} isBigNew={true} />
        )}
      </div>
      <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {loading
          ? [...Array(8)].map((_, index) => <Skeleton key={index} className="w-full h-[320px] bg-[#cbcbcd] animate-pulse" />)
          : news
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
