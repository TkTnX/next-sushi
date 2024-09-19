import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import Providers from "@/components/shared/providers";
import { Suspense } from "react";
import Footer from "@/components/shared/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ninja Sushi",
};
export const fetchCache = "force-no-store";
export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={cn("bg-[#f5f5f7] min-h-full ", inter.className)}>
        <Providers>
          <Suspense>
            <div className="container">{children}</div>

            <Footer />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
