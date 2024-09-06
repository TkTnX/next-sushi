import { Api } from "@/services/api-client";
import { create } from "zustand";

export type NotificationsItemType = {
  title: string;
  body: string;
  id: number;
};

interface Notifications {
  notifications: NotificationsItemType[];
    getNotifications: () => Promise<void>;
    addNewNotification: (title: string, body: string) => Promise<void>;
  loading: boolean;
}

export const useNotifications = create<Notifications>()((set, state) => ({
  notifications: [],
  loading: false,
  getNotifications: async () => {
    set({ loading: true });
    try {
      const notifications = await Api.notifications.getAllNotifications();

      set({ notifications: notifications.notificationsItem });
      set({ loading: false });
    } catch (error) {
      console.log(error);
      set({ loading: true });
    } finally {
      set({ loading: false });
    }
  },
  addNewNotification: async (title, body) => {
    try {
      set({ loading: true });
      const newNotifications = await Api.notifications.addNewNotification({
        title,
        body,
      });

      set({ notifications: newNotifications.notificationsItem });
    } catch (error) {
      console.log(error);
      set({ loading: false });
    } finally {
      set({ loading: false });
    }
  },
}));
