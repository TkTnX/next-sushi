import { useNotifications } from "@/store/notificationsStore";
import * as React from "react";
import NotificationsModal from "../modals/notifications-modal";
import { cn } from "@/lib/utils";
import { Bell, Loader } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const NotificationsButton: React.FunctionComponent = () => {
  const {
    notifications,
    hasNewNotifications,
    loading: notificationsLoading,
    setOffNewNotifications,
  } = useNotifications();

  return (
    <NotificationsModal>
      <button
        onClick={setOffNewNotifications}
        className={cn(
          "xl:w-[56px] xl:h-[56px] xl:border p-1 border-[#d2d2d7] rounded-2xl xl:p-4 group hover:bg-primary  hover:border-primary transition duration-200 relative",
          { "opacity-50 pointer-events-none": notificationsLoading }
        )}
      >
        {notificationsLoading ? (
          <Loader className="animate-spin" />
        ) : (
          <>
            <Bell
              className="stroke-[#686870] group-hover:stroke-white transition duration-200"
              size={24}
            />
            {notifications && notifications.length > 0 && (
              <Badge className="absolute -left-1 h-[25px] -top-2">
                {notifications.length}
              </Badge>
            )}
            {hasNewNotifications && (
              <div className="absolute -right-1 w-[15px] h-[15px] -top-1 bg-primary rounded-full" />
            )}
          </>
        )}
      </button>
    </NotificationsModal>
  );
};

export default NotificationsButton;
