import NewsGroup from "@/components/shared/news/news-group";
import NewsSearch from "@/components/shared/news/news-search";
import * as React from "react";

interface INewsPageProps {}

const NewsPage: React.FunctionComponent<INewsPageProps> = (props) => {
  return (
    <div className="mt-20">
      <h2 className="text-5xl font-bold">Новости</h2>
      {/* SEARCH */}
      <NewsSearch />

      {/* NEWS */}
      <NewsGroup />
    </div>
  );
};

export default NewsPage;
