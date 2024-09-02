import { prisma } from "@/Prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
      const id = params.id;
    if (!id) {
      return NextResponse.json({ error: "ID не найден" });
    }

    const product = await prisma.product.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        exceptions: true,
        ingredients: true,
      },
    });

    if (!product) {
      return NextResponse.json({ error: "Товар не найден" });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Произошла ошибка" });
  }
}
