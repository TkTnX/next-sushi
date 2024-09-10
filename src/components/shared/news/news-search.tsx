"use client";
import { Input } from "@/components/ui/input";
import { useNewsStore } from "@/store/newsStore";
import { Search } from "lucide-react";
import * as React from "react";

interface INewsSearchProps {}

const NewsSearch: React.FunctionComponent<INewsSearchProps> = () => {
  const { inputValue, setInputValue } = useNewsStore();

  return (
    <div className="flex items-center mt-4 max-w-[300px] bg-white pl-3 rounded-md">
      <button>
        <Search />
      </button>
      <Input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Введите ключевые слова"
        className="border-none ml-2"
      />
    </div>
  );
};

export default NewsSearch;
