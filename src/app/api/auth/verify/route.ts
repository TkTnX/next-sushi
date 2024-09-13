"use server"


import { prisma } from "@/Prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  try {
    const code = req.nextUrl.searchParams.get("code");

    if (!code) {
      return NextResponse.json({ error: "Код не найден", status: 400 });
    }

    const verificationCode = await prisma.verificationCode.findFirst({
      where: {
        code,
      },
    });

    if (!verificationCode) {
      return NextResponse.json({ error: "Код не найден", status: 400 });
    }

    await prisma.user.update({
      where: {
        id: verificationCode.userId,
      },
      data: {
        verificated: new Date(),
      },
    });

    await prisma.verificationCode.delete({
      where: {
        id: verificationCode.id,
      },
    });

    return NextResponse.redirect(new URL("/?verified", req.url));
  } catch (error) {
    console.error("[VERIFY_CODE_FUNC] Error: ", error);

    return NextResponse.json({
      error: "Произошла ошибка на сервере",
      status: 500,
    });
  }
}
