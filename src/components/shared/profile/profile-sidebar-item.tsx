import { TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Image from "next/image";
import * as React from "react";

interface IProfileSidebarItemProps {
  imageUrl: string;
  title: string;
  activeCategory: number;
  index: number;
  setActiveCategory: (number: number) => void;
}

const ProfileSidebarItem: React.FunctionComponent<IProfileSidebarItemProps> = ({
  imageUrl,
  title,
  activeCategory,
  index,
  setActiveCategory,
}) => {
  return (
    <TabsTrigger
      value={String(index)}
      onClick={() => setActiveCategory(index)}
      className={cn(
        "flex items-center gap-3 group hover:bg-primary transition duration-200 p-3 rounded-xl bg-inherit",
        { "bg-primary text-white": activeCategory === index }
      )}
    >
      <div className="bg-white p-[11px] rounded-xl">
        <Image className="" src={imageUrl} alt={title} width={24} height={24} />
      </div>
      <h6 className="font-semibold group-hover:text-white transition duration-200">
        {title}
      </h6>
    </TabsTrigger>
  );
};

export default ProfileSidebarItem;
