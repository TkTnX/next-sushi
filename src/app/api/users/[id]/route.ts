import { prisma } from "@/Prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);

    const user = await prisma.user.findFirst({
      where: {
        id,
      },
      include: {
        verificationCode: true,
        userAddresses: true,
        favorites: {
          include: {
            favoriteItem: true,
          },
        },
        notifications: true,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "Пользователь не найден" });
    }

    if (user.verificationCode && user.verificationCode.code !== null) {
      await prisma.verificationCode.delete({
        where: {
          userId: id,
        },
      });
    }

    if (user.userAddresses && user.userAddresses.length > 0) {
      await prisma.addressItem.deleteMany({
        where: {
          userAddressesId: {
            in: user.userAddresses.map((address) => address.id),
          },
        },
      });

      await prisma.userAddresses.deleteMany({
        where: {
          userId: id,
        },
      });
    }

    if (user.favorites && user.favorites.favoriteItem.length > 0) {
      const favoriteItemIds = user.favorites.favoriteItem.map(
        (favoriteItem) => favoriteItem.id
      );

      if (favoriteItemIds.length > 0) {
        await prisma.favoriteItem.deleteMany({
          where: {
            id: { in: favoriteItemIds },
          },
        });
      }
      await prisma.favorites.delete({
        where: {
          userId: id,
        },
      });
    }

   if (user.notifications && user.notifications.length > 0) {
     const notificationIds = user.notifications.map(
       (notification) => notification.id
     );

     if (notificationIds.length > 0) {
       await prisma.notificationsItem.deleteMany({
         where: {
           notificationsId: { in: notificationIds },
         },
       });

       await prisma.notifications.deleteMany({
         where: {
           userId: id,
         },
       });
     }
   }
    await prisma.user.delete({
      where: {
        id,
      },
    });

    const users = await prisma.user.findMany({
      orderBy: {
        id: "asc",
      },
    });

    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Произошла ошибка" });
  }
}
