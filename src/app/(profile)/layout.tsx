import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import Header from "@/components/shared/header";
import ProfileSidebar from "@/components/shared/profile/profile-sidebar";

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
          <div className="flex items-start justify-between mt-8">
              <ProfileSidebar />
              {children}
          </div>
    </main>
  );
}
