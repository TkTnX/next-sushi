import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import * as React from "react";
import NotificationsItem from "../notifications-item";

interface INotificationsModalProps {
  children: React.ReactNode;
}

const NotificationsModal: React.FunctionComponent<INotificationsModalProps> = ({
  children,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-[590px] pb-0">
        <h2 className="text-2xl font-bold">Уведомления</h2>

        <div className="grid gap-2 mt-6  max-h-[600px] overflow-y-auto">
          <NotificationsItem
            title="Заказ №12345 оформлен"
            message="Ваш заказ #12345 оформлен, поздравляем!"
          />
          <NotificationsItem
            title="Заказ №12345 оформлен"
            message="Ваш заказ #12345 оформлен, поздравляем!"
          />
          <NotificationsItem
            title="Заказ №12345 оформлен"
            message="Ваш заказ #12345 оформлен, поздравляем!"
          />
          <NotificationsItem
            title="Заказ №12345 оформлен"
            message="Ваш заказ #12345 оформлен, поздравляем!"
          />
          <NotificationsItem
            title="Заказ №12345 оформлен"
            message="Ваш заказ #12345 оформлен, поздравляем!"
          />
          <NotificationsItem
            title="Заказ №12345 оформлен"
            message="Ваш заказ #12345 оформлен, поздравляем!"
          />
          <NotificationsItem
            title="Заказ №12345 оформлен"
            message="Ваш заказ #12345 оформлен, поздравляем!"
          />
          <NotificationsItem
            title="Заказ №12345 оформлен"
            message="Ваш заказ #12345 оформлен, поздравляем!"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationsModal;
