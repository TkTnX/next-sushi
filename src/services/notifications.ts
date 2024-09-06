import { axiosInstance } from "./axios";

export async function getAllNotifications() {
  try {
    return (await axiosInstance.get("/notifications")).data;
  } catch (error) {
    console.log(error);
  }
}

export async function addNewNotification(notificationInfo: {
  title: string;
  body: string;
}) {
  try {
    if (!notificationInfo) {
      throw Error();
    }

    const { data } = await axiosInstance.post("/notifications", {
      title: notificationInfo.title,
      body: notificationInfo.body,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
}
