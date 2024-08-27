import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { signIn } from "next-auth/react";
import Image from "next/image";
import * as React from "react";
import AuthBtn from "../auth-btn";
import { Input } from "@/components/ui/input";

interface IAuthModalProps {
  open: boolean;
  onClose: () => void;
}

const AuthModal: React.FunctionComponent<IAuthModalProps> = ({
  open,
  onClose,
}) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="p-6 w-[460px]">
        <DialogTitle className="text-center text-black text-3xl">
          Авторизация
        </DialogTitle>
        <p className="text-center    text-[#686870]">
          Введите ваш номер телефона:
        </p>
        {/* FORM */}
        <form>
          <label className="grid w-full gap-2 text-[#9E9E9E]">
            Почта
            <Input placeholder="Введите почту" className="text-black" />
            <Button
              variant="default"
              className="bg-secondary text-white mt-3 py-4"
            >
              Войти по почте
            </Button>
          </label>
        </form>

        <p className="text-[#9E9E9E] mt-4 text-center">Или</p>

        <div className="flex items-center gap-2 justify-center">
          <AuthBtn name="github" />
          <AuthBtn name="google" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
