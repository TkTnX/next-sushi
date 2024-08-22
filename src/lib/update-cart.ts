import { prisma } from "@/Prisma/prisma-client";
import { calcTotalPrice } from "./calc-cart-total-price";

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

  const totalPrice = calcTotalPrice({ items: userCart });

  await prisma.cart.update({
    where: {
      id: userCart?.id,
    },
    data: {
      totalPrice,
    },
  });

  return userCart;
};
