import { prisma } from "@/Prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { findOrCreateCart } from "@/lib/findOrCreateCart";
export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({ message: "Токен не найден" });
    }

    const data = await prisma.cart.findFirst({
      where: {
        token,
      },
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
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}

interface IAddItemToCart {
  productId: number;
}



export async function POST(req: NextRequest) { 
  try {
    let token = req.cookies.get("cartToken")?.value;

    if (!token) {
      token = crypto.randomUUID();
    }

    const userCart = await findOrCreateCart(token);
    const data = await(req.json()) as IAddItemToCart;

    const findProductInCart = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart.id,
        productId: data.productId,
      },
    });
    

    if (findProductInCart) {
      await prisma.cartItem.update({
        where: {
          id: findProductInCart.id,
        },
        data: {
          quantity: findProductInCart.quantity + 1,
        },
      })
    } else {
       await prisma.cartItem.create({
         data: {
           cartId: userCart.id,
           productId: data.productId,
           quantity: 1,
         },
       });
    }

   

    const updatedCart = await prisma.cart.findFirst({
      where: { token },
      include: {
        cartItems: {
          orderBy: {
            quantity: "desc",
          },
          include: {
            productItem: true,
          }
        }
      }

    })

    const res = NextResponse.json(updatedCart);
    res.cookies.set("cartToken", token)
    return res


  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: "Произошла ошибка", error });
  }
}
