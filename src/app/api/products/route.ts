import { prisma } from "@/Prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.product.findMany({
    include: {
      exceptions: true,
      ingredients: true,
    }
  });
  return NextResponse.json(data);
}

