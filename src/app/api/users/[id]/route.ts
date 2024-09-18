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
