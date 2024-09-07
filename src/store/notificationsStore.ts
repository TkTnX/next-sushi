import { Api } from "@/services/api-client";
import { create } from "zustand";

export type NotificationsItemType = {
  title: string;
  body: string;
  id: number;
};

interface Notifications {
  notifications: NotificationsItemType[];
  hasNewNotifications: boolean;
  loading: boolean;
  
  getNotifications: () => Promise<void>;
  addNewNotification: (title: string, body: string) => Promise<void>;
  setOffNewNotifications: () => void;
}

export const useNotifications = create<Notifications>()((set, state) => ({
  notifications: [],
  loading: false,
  hasNewNotifications: false,
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

      set({
        notifications: newNotifications.notificationsItem,
        hasNewNotifications: true,
      });
    } catch (error) {
      console.log(error);
      set({ loading: false });
    } finally {
      set({ loading: false });
    }
  },
  setOffNewNotifications: () => {
    set({ hasNewNotifications: false });
  }
}));
