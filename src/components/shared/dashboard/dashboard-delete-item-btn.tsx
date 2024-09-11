"use client";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import * as React from "react";

interface IDashboardDeleteItemBtnProps {
  onClick: (id: number) => void;
  id: number;
}

const DashboardDeleteItemBtn: React.FunctionComponent<
  IDashboardDeleteItemBtnProps
> = ({ onClick, id }) => {
  return (
    <Button
      onClick={() => onClick(id)}
      variant="outline"
      className="text-red-500 ml-auto flex items-center"
    >
      Удалить <X />
    </Button>
  );
};

export default DashboardDeleteItemBtn;
