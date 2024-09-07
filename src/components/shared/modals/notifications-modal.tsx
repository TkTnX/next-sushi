import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import * as React from "react";
import NotificationsItem from "../notifications/notifications-item";
import { useNotifications } from "@/store/notificationsStore";
import { Bell } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface INotificationsModalProps {
  children: React.ReactNode;
}

const NotificationsModal: React.FunctionComponent<INotificationsModalProps> = ({
  children,
}) => {
  const { getNotifications, notifications, loading } = useNotifications();

  React.useEffect(() => {
    getNotifications();
  }, []);


  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-[590px] pb-0">
        <h2 className="text-2xl font-bold">Уведомления</h2>

        <div className="grid gap-2 mt-6  max-h-[600px] overflow-y-auto">
          {!loading && notifications && notifications.length === 0 && (
            <div className=" h-48 flex flex-col items-center justify-center">
              <Bell size={36} />
              <p>У вас нет уведомлений</p>
            </div>
          )}

          {!loading && notifications
            ? [...notifications].reverse().map((item) => (
                <NotificationsItem
                  key={item.id}
                  title={item.title}
                  message={item.body}
                />
              ))
            : [...Array(10)].map((_, index) => (
                <Skeleton key={index} className="w-full h-[84px]" />
              ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationsModal;
