"use client";
import { Button } from "@/components/ui/button";
import { NewsItem } from "@prisma/client";
import { Pen, Plus, X } from "lucide-react";
import * as React from "react";
import DashboardDeleteItemBtn from "./dashboard-delete-item-btn";

interface IDashboardNewsProps {
  news: NewsItem[];
}

const DashboardNews: React.FunctionComponent<IDashboardNewsProps> = ({
  news,
}) => {
  return (
    <div className="mt-5">
      <Button className="mb-3 bg-secondary">
        <Plus /> Добавить новость
      </Button>
      {news.map((news) => (
        <div key={news.id} className="flex items-center justify-between w-full">
          <div className="border p-3 flex items-center gap-4 w-full">
            <div>
              <p className="font-bold">id</p>
              {news.id}
            </div>
            <div className="w-[200px] showLittle">
              <p className="font-bold">Название</p>
              {news.title}
            </div>
            <div>
              <p className="font-bold">Категория</p>
              {news.category}
            </div>
            <div className="flex items-center ml-auto gap-2">
              <DashboardDeleteItemBtn onClick={() => {}} id={news.id} />
              <Button
                variant="outline"
                className="text-orange-500  flex items-center gap-2"
              >
                Редактировать <Pen size={15} />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardNews;
