import { getUserSession } from "@/lib/get-user-session";
import { prisma } from "@/Prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const user = await getUserSession();

    if (!user) {
      return NextResponse.json({ message: "Вы не в аккаунте" });
    }

    let addresses = await prisma.userAddresses.findFirst({
      where: {
        userId: Number(user.id),
      },
      include: {
        addressItem: true,
      },
    });

    if (!addresses) {
      addresses = await prisma.userAddresses.create({
        data: {
          userId: Number(user.id),
        },
        include: {
          addressItem: true,
        },
      });
    }

    return NextResponse.json(addresses);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Не удалось получить адреса" });
  }
}

export async function POST(req: NextRequest) {
  try {
    const user = await getUserSession();

    if (!user) {
      return NextResponse.json({ message: "Вы не в аккаунте" });
    }

    const userAddresses = await prisma.userAddresses.findFirst({
      where: {
        userId: Number(user.id),
      },
    });

    if (!userAddresses) {
      return NextResponse.json({ message: "Не удалось создать адрес" });
    }

    const data = (await req.json()) as { name: string };

    if (!data) {
      return NextResponse.json({ message: "Не удалось создать адрес" });
    }

    const newAddress = await prisma.addressItem.create({
      data: {
        name: data.name,
        userAddressesId: userAddresses?.id,
      },
    });

    if (!newAddress) {
      return NextResponse.json({ message: "Не удалось создать адрес" });
    }

    const newUserAddresses = await prisma.userAddresses.findFirst({
      where: {
        userId: Number(user.id),
      },
      include: {
        addressItem: true,
      },
    });

    return NextResponse.json(newUserAddresses);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Не удалось создать адрес" });
  }
}


