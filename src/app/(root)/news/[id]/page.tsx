import { Api } from "@/services/api-client";
import Image from "next/image";
import { redirect } from "next/navigation";
import * as React from "react";

interface INewsItemProps {
  params: {
    id: string;
  };
}

const NewsItem: React.FunctionComponent<INewsItemProps> = async ({
  params,
}) => {
  const id = Number(params.id);

  const newsItem = await Api.news.getNewsItem(id);

  if (!newsItem) {
    return redirect("/news");
  }

  return (
    <div className="mt-20">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-2xl md:text-5xl font-bold ">{newsItem.title}</h2>
        <div className="flex items-center gap-4 mt-4">
          <p className="text-[#686870] text-sm py-3 px-4 bg-white rounded-md max-w-max">
            {newsItem.category}
          </p>
          <p className="text-[#9E9E9E] text-sm">
            {new Date(newsItem.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto relative w-full  bg-white mt-8 rounded-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={newsItem.image} alt={newsItem.title} className="rounded-lg w-full " />
      </div>
      <p className="mt-4 text-[#686870] max-w-[1000px] mx-auto">
        {newsItem.description}
      </p>
    </div>
  );
};

export default NewsItem;
