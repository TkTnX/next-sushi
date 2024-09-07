import { getUserSession } from "@/lib/get-user-session";
import { prisma } from "@/Prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const user = await getUserSession();
    if (!user) {
      return NextResponse.json({ message: "Вы не в аккаунте" });
    }

    await prisma.notificationsItem.deleteMany({
      where: {
        createdAt: {
          lt: new Date(new Date().setDate(new Date().getDate() - 1)),
        },
      },
    });

    const notifications = await prisma.notifications.findFirst({
      where: {
        userId: Number(user.id),
      },
      include: {
        notificationsItem: true,
      },
    });

    if (!notifications) {
      await prisma.notifications.create({
        data: {
          userId: Number(user.id),
        },
      });
    }

    return NextResponse.json(notifications);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Не удалось получить уведомления" });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as { title: string; body: string };

    if (!data) {
      return NextResponse.json({ message: "Не удалось добавить уведомление" });
    }

    const user = await getUserSession();
    if (!user) {
      return NextResponse.json({ message: "Вы не в аккаунте" });
    }

    const notifications = await prisma.notifications.findFirst({
      where: {
        userId: Number(user.id),
      },
    });

    if (!notifications) {
      const createdNotifications = await prisma.notifications.create({
        data: {
          userId: Number(user.id),
        },
      });
      if (createdNotifications) {
        await prisma.notificationsItem.create({
          data: {
            title: data.title,
            body: data.body,
            notificationsId: createdNotifications.id,
          },
        });
      }
    }

    await prisma.notificationsItem.create({
      data: {
        title: data.title,
        body: data.body,
        notificationsId: Number(notifications?.id),
      },
    });

    const newNotifications = await prisma.notifications.findFirst({
      where: {
        userId: Number(user.id),
      },
      include: {
        notificationsItem: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });

    if (!newNotifications) {
      return NextResponse.json({ message: "Не удалось добавить уведомление" });
    }
    return NextResponse.json(newNotifications);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Не удалось добавить уведомление" });
  }
}
