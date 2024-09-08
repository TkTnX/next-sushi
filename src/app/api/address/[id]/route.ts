import { getUserSession } from "@/lib/get-user-session";
import { prisma } from "@/Prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getUserSession();
      const id = Number(params.id);
      console.log(id)

       if (!id) {
         return NextResponse.json({ message: "Адрес не найден" });
       }

      
    if (!user) {
      return NextResponse.json({ message: "Вы не в аккаунте" });
    }
    const userAddresses = await prisma.userAddresses.findFirst({
      where: {
        userId: Number(user.id),
      },
    });

    if (!userAddresses) {
      return NextResponse.json({ message: "Не удалось удалить адрес" });
    }

   
    await prisma.addressItem.delete({
      where: {
        id: id,
      },
    });

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
    return NextResponse.json({ error: "[ADDRESS_DELETE] Не удалось удалить адрес" });
  }
}
