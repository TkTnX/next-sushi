import NewsGroup from "@/components/shared/news/news-group";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import * as React from "react";

interface INewsPageProps {}

const NewsPage: React.FunctionComponent<INewsPageProps> = (props) => {
  return (
    <div className="mt-20">
      <h2 className="text-5xl font-bold">Новости</h2>
      <div className="flex items-center mt-4 max-w-[300px] bg-white pl-3 rounded-md">
        <button>
          <Search />
        </button>
        <Input
          placeholder="Введите ключевые слова"
          className="border-none ml-2"
        />
          </div>
          
          {/* NEWS */}
          <NewsGroup />
    </div>
  );
};

export default NewsPage;
