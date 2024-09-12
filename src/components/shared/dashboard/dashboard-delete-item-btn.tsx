"use client";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import * as React from "react";

interface IDashboardDeleteItemBtnProps {
  onClick: (id: number) => void;
  id: number;
  loading?:boolean
}

const DashboardDeleteItemBtn: React.FunctionComponent<
  IDashboardDeleteItemBtnProps
> = ({ onClick, id, loading }) => {
  return (
    <Button
      onClick={() => onClick(id)}
      variant="outline"
      disabled={loading}
      className="text-red-500 ml-auto flex items-center"
    >
      <span className="hidden md:block">Удалить</span>
      <X />
    </Button>
  );
};

export default DashboardDeleteItemBtn;
