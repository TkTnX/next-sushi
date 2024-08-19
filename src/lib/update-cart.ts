import { prisma } from "@/Prisma/prisma-client";

export const updateCart = async (token: string) => {
    const userCart = await prisma.cart.findFirst({
      where: { token },
      include: {
        cartItems: {
          orderBy: {
            quantity: "desc",
          },
          include: {
            productItem: true,
          },
        },
      },
    });

    return userCart;
}