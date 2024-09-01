import { getUserSession } from "@/lib/get-user-session";
import { prisma } from "@/Prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const user = await getUserSession();
        if (!user) {
          return NextResponse.json({ message: "Вы не в аккаунте" });
        }

        const orders = await prisma.order.findMany({
          where: {
            userId: Number(user.id),
          },
        });

        if (!orders) {
            return NextResponse.json({ message: "Товары не найдены" });
        }

        return NextResponse.json(orders || []);

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Something went wrong" })
    }

}