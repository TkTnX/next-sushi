import { getUserSession } from "@/lib/get-user-session"
import { prisma } from "@/Prisma/prisma-client"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const news = await prisma.newsItem.findMany({
            orderBy: {
                createdAt: "desc"
            }
        })

        return NextResponse.json(news)
    } catch (error) {
        console.log(error)
        NextResponse.json({error: "Не удалось получить новости"})
    }
}
