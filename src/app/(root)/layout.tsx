import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import Header from "@/components/shared/header";

export const metadata: Metadata = {
  title: "Ninja Sushi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      suppressHydrationWarning={true}
      className={cn("bg-[#f5f5f7] min-h-full container")}
    >
      <Header />
      {children}
    </main>
  );
}
