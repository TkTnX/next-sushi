import { prisma } from "@/Prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
      const data = (await req.json()) as { quantity: number };
    const token = req.cookies.get("cartToken")?.value;
    if (!token) {
      return NextResponse.json({ error: "Token not found" });
    }


    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id,
      },
    });

    if (!cartItem) {
      return NextResponse.json({ message: "Товар не найден" });
    }

    const updatedCartItem = await prisma.cartItem.update({
      where: {
        id,
      },
      data: {
        quantity: data.quantity,
      },
    });

    return NextResponse.json(updatedCartItem);
  } catch (error) {
    NextResponse.json({ message: "Ошибка!" });
    console.log(error);
  }
}


export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
      const id = Number(params.id);
      const token = req.cookies.get("cartToken")?.value;
      if (!token) {
        return NextResponse.json({ error: "Token не найден" });
      }

    
      const cartItem = await prisma.cartItem.findFirst({
        where: {
          id,
        },
      });

      if (!cartItem) {
          return NextResponse.json({ message: "Товар не найден" });
      }

      const deletedCartItem = await prisma.cartItem.delete({
        where: {
          id,
        },
      })

      return NextResponse.json(deletedCartItem);

  } catch (error) {
    NextResponse.json({ message: "Не удалось удалить продукт!" });
    console.log(error);
  }
}