import { prisma } from "@/Prisma/prisma-client";
import { Cart } from "@prisma/client";
import { NextResponse } from "next/server";

export const findOrCreateCart = async (token: string) => {
    let userCart = await prisma.cart.findFirst({
      where: {
        token,
      },
    });

    if (!userCart) {
      userCart = await prisma.cart.create({
        data: {
          token,
        },
      });
    }

    return userCart;
};
