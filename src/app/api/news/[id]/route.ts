import { getUserSession } from "@/lib/get-user-session";
import { prisma } from "@/Prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);

    if (!id) {
      return NextResponse.json({ error: "ID не найден" });
    }

    const newsItem = await prisma.newsItem.findFirst({
      where: {
        id,
      },
    });

    if (!newsItem) {
      return NextResponse.json({ error: "Новость не найдена" });
    }

    return NextResponse.json(newsItem);
  } catch (error) {
    console.log(error);
    NextResponse.json({ error: "Не удалось получить новость" });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getUserSession();
    const id = Number(params.id);
    if (!user || user?.role !== "ADMIN") {
      return NextResponse.json({ error: "Недостаточно прав" });
    }

    await prisma.newsItem.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({ message: "Новость удалена" });

  } catch (error) {
    console.log(error);
    NextResponse.json({ error: "Не удалось удалить новость" });
  }
}
