import type { Metadata } from "next";
import Header from "@/components/shared/header";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Ninja Sushi",
};

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      suppressHydrationWarning={true}
      className={cn("bg-[#f5f5f7] min-h-full container")}
    >
      <Header isCheckoutPage={true} />
      {children}
    </main>
  );
}
