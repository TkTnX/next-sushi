import { prisma } from "@/Prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({message: "Токен не найден"});
    }

    const data = await prisma.cart.findFirst({
      where: {
        token,
      },
      include: {
        cartItems: {
          orderBy: {
            createdAt: "desc",
          },
          include: {
            productItem: true,
          },
        },
      },
    });
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}
