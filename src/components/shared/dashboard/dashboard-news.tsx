"use client";
import { Button } from "@/components/ui/button";
import { NewsItem } from "@prisma/client";
import { Pen, Plus, X } from "lucide-react";
import * as React from "react";
import DashboardDeleteItemBtn from "./dashboard-delete-item-btn";
import AddNewsItemModal from "../modals/add-news-item-modal";
import EditNewsItemModal from "../modals/edit-news-item-modal";
import { Api } from "@/services/api-client";
import toast from "react-hot-toast";
import { useNewsStore } from "@/store/newsStore";

interface IDashboardNewsProps {
  news: NewsItem[];
}

const DashboardNews: React.FunctionComponent<IDashboardNewsProps> = ({
  news,
}) => {
  // todo: store
    const deleteNewsItem = async (id: number) => {
      try {
        await deleteNewsItem(id);
        toast.success("Новость удалена");
      } catch (error) {
        console.log(error);
        toast.error("Не удалось удалить новость");
      }
    };
  return (
    <div className="mt-5">
      <AddNewsItemModal>
        <Button className="mb-3 bg-secondary">
          <Plus /> Добавить новость
        </Button>
      </AddNewsItemModal>
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
              <DashboardDeleteItemBtn loading={false} onClick={deleteNewsItem} id={news.id} />
              <EditNewsItemModal id={news.id}>
                <Button
                  
                  variant="outline"
                  className="text-orange-500  flex items-center gap-2"
                >
                  Редактировать <Pen size={15} />
                </Button>
              </EditNewsItemModal>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardNews;
