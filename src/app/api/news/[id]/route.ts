import { prisma } from "@/Prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const id = Number(params.id);

        if (!id) {
            return NextResponse.json({ error: "ID не найден" });
        }

        const newsItem = await prisma.newsItem.findFirst({
            where: {
                id
            }
        })

        if (!newsItem) {
            return NextResponse.json({ error: "Новость не найдена" });
        }

        return NextResponse.json(newsItem)
    } catch (error) {
        console.log(error)
        NextResponse.json({ error: "Не удалось получить новость" })
    }
 }