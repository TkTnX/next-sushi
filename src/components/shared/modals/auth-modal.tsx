import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import * as React from "react";
import AuthBtn from "../auth-btn";
import LoginForm from "../forms/login-form";

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
          Введите вашу почту и пароль:
        </p>
        {/* FORM */}
        <LoginForm onClose={handleClose} />

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
