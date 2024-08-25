"use server";

import { CheckoutFormType } from "@/components/shared/checkout/checkout-form-schema";
import { prisma } from "@/Prisma/prisma-client";
import { OrderStatus } from "@prisma/client";
import { cookies } from "next/headers";

export async function createOrder(data: CheckoutFormType) {
  try {
    const cookie = cookies();
    const cartToken = cookie.get("cartToken")?.value;

    if (!cartToken) {
      throw new Error("Токен не найден");
    }

    const userCart = await prisma.cart.findFirst({
      where: {
        token: cartToken,
      },
      include: {
        user: true,
        cartItems: {
          include: {
            productItem: true,
          },
        },
      },
    });

    if (!userCart) {
      throw new Error("Корзина не найдена");
    }

    if (userCart.cartItems.length === 0) {
      throw new Error("Корзина пуста");
    }

    if (userCart.totalPrice < 400) {
      throw new Error("Минимальная сумма заказа 400 руб.");
    }

    const order = await prisma.order.create({
      data: {
        status: OrderStatus.PENDING,
        totalPrice: userCart.totalPrice,
        token: cartToken,
        items: JSON.stringify(userCart.cartItems),

        fullName: data.firstName + " " + data.lastName,
        phone: data.phone,
        email: data.email,
        address: data.address,
        comment: data.comment || "",
        userId: userCart.userId,
      },
    });
      
      await prisma.cart.update({
          where: {
              id: userCart.id
          },
          data: {
              totalPrice: 0
          }
      })

      await prisma.cartItem.deleteMany({
        where: {
          cartId: userCart.id
        }
      })

      return "https://youtube.com"
      
  } catch (error) {
    console.log(error);
  }
}
