import { prisma } from "@/Prisma/prisma-client";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    const data = (await request.json()) as {
      userId: number;
    };
    if (!id) {
      return NextResponse.json({ error: "ID не найден" });
    }

    const user = await prisma.user.findFirst({
      where: {
        id: data.userId,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "Пользователь не найден" });
    }

    const favorites = await prisma.favorites.findFirst({
      where: {
        userId: user.id,
      },
    });

    if (!favorites) {
      await prisma.favorites.create({
        data: {
          userId: user.id,
        },
      });
    }

    await prisma.favoriteItem.create({
      data: {
        favoritesId: favorites?.id!,
        productId: id,
      },
    });

    const newFavorites = await prisma.favorites.findFirst({
      where: {
        userId: user.id,
      },
      include: {
        favoriteItem: {
          include: {
            productItem: true,
          },
        },
      },
    });

    return NextResponse.json(newFavorites);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Произошла ошибка" }, { status: 500 });
  }
}
