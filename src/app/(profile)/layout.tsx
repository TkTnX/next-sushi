import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import Header from "@/components/shared/header";
import ProfileSidebar from "@/components/shared/profile/profile-sidebar";

export const metadata: Metadata = {
  title: "Ninja Sushi | Профиль",
};

export default function ProfileLayout({
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
          <div className="flex items-start mt-8 gap-[153px]">
              <ProfileSidebar />
              {children}
          </div>
    </main>
  );
}
