"use server";

import { CheckoutFormType } from "@/components/shared/checkout/checkout-form-schema";
import { OrderSuccess } from "@/components/shared/email-templates/order-success";
import { PayOrder } from "@/components/shared/email-templates/pay-order";
import { sendEmail } from "@/lib/send-email";
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
        id: userCart.id,
      },
      data: {
        totalPrice: 0,
      },
    });

    await prisma.cartItem.deleteMany({
      where: {
        cartId: userCart.id,
      },
    });


    const email = await sendEmail(
      data.email,
      `Заказ №${order.id}`,
      PayOrder({
        orderId: order.id,
        fullName: data.firstName + " " + data.lastName,
        payLink: "https://youtube.com",
        totalPrice: userCart.totalPrice,
      })
    );

    if (email) {
      await prisma.order.update({
        where: {
          id: order.id,
        },
        data: {
          status: OrderStatus.SUCCEEDED,
        },
      });

      await sendEmail(
        data.email,
        `Заказ №${order.id} - успешно!`,
        OrderSuccess({
          orderId: order.id,
          fullName: data.firstName + " " + data.lastName,
        })
      );
    } else {
      await prisma.order.update({
        where: {
          id: order.id,
        },
        data: {
          status: OrderStatus.CANCELLED,
        },
      });

      await sendEmail(
        data.email,
        `Заказ №${order.id} - неудача!`,
        OrderSuccess({
          orderId: order.id,
          fullName: data.firstName + " " + data.lastName,
        })
      );
    }

    return `http://localhost:3000/order-info/${order.id}?paid`;
  } catch (error) {
    console.log(error);
  }
}
