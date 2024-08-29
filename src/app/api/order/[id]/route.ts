import { prisma } from "@/Prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    const order = await prisma.order.findFirst({
      where: {
        id,
      },
      include: {
        user: true,
      },
    });

    return NextResponse.json(order);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Произошла ошибка", error },
      { status: 500 }
    );
  }
}
