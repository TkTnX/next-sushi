"use client";
import { Button } from "@/components/ui/button";
import { NewsItem } from "@prisma/client";
import { Pen, Plus } from "lucide-react";
import * as React from "react";
import DashboardDeleteItemBtn from "./dashboard-delete-item-btn";
import AddNewsItemModal from "../modals/add-news-item-modal";
import EditNewsItemModal from "../modals/edit-news-item-modal";
import toast from "react-hot-toast";
import { useDashboardStore } from "@/store/dashboardStore";
import { Skeleton } from "@/components/ui/skeleton";
import { deleteNewsItem } from "@/services/news";

interface IDashboardNewsProps {}

const DashboardNews: React.FunctionComponent<IDashboardNewsProps> = () => {
  const { loading, news, getNews } = useDashboardStore();
  const [openModal, setOpenModal] = React.useState(false);

  React.useEffect(() => {
    getNews();
  }, []);

  const deleteNewsItemFunc = async (id: number) => {
    try {
      await deleteNewsItem(id);
      getNews();
      toast.success("Новость удалена");
    } catch (error) {
      console.log(error);
      toast.error("Не удалось удалить новость");
    }
  };

  return (
    <div className="mt-5">
      <AddNewsItemModal openModal={openModal} setOpenModal={setOpenModal}>
        <Button
          onClick={() => setOpenModal(true)}
          className="mb-3 bg-secondary"
        >
          <Plus /> Добавить новость
        </Button>
      </AddNewsItemModal>
      <div className="grid gap-2">
        {loading &&
          [...new Array(5)].map((_, index) => (
            <Skeleton
              key={index}
              className="w-full h-[74px] bg-[#cbcbcd] animate-pulse"
            />
          ))}
      </div>
      {!loading &&
        news.map((news) => (
          <div
            key={news.id}
            className="flex items-center justify-between w-full "
          >
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
              <div className="flex flex-col lg:flex-row items-center ml-auto gap-2">
                <DashboardDeleteItemBtn
                  onClick={() => deleteNewsItemFunc(news.id)}
                  loading={loading}
                  id={news.id}
                />
                <EditNewsItemModal id={news.id}>
                  <Button
                    variant="outline"
                    className="text-orange-500  flex items-center gap-2"
                  >
                    <span className="hidden md:block">Редактировать</span> <Pen size={15} />
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
