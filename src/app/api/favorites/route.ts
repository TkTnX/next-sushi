import { getUserSession } from "@/lib/get-user-session";
import { prisma } from "@/Prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.searchParams.get("userId");
    const session = await getUserSession();
    if (!userId) {
      return NextResponse.json({ error: "Вы не вошли в аккаунт!" });
      }
      
      if (userId !== session?.id) {
        return NextResponse.json({ error: "Вы не вошли в аккаунт!" });
      }

    const favorites = await prisma.favorites.findFirst({
      where: {
        userId: Number(userId),
      },
      include: {
        favoriteItem: {
          include: {
            productItem: true,
          },
        },
      },
    });

    if (!favorites) {
      return NextResponse.json({
        error: "Не удалось получить избранные товары",
      });
    }


    return NextResponse.json(favorites);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Не удалось получить избранные товары" });
  }
}
