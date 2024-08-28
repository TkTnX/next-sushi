import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import * as React from "react";
import AuthBtn from "../auth-btn";
import LoginForm from "../forms/login-form";
import RegisterForm from "../forms/register-form";

interface IAuthModalProps {
  open: boolean;
  onClose: () => void;
  type: "login" | "register"; 
  setType: (type: "login" | "register") => void;
}

const AuthModal: React.FunctionComponent<IAuthModalProps> = ({
  open,
  onClose,
  type,
  setType,
}) => {
  const handleClose = () => {
    onClose();
  };

  const handleChangeType = () => setType(type === "login" ? "register" : "login");


  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="p-6 w-[460px]">
        <DialogTitle className="text-center text-black text-3xl">
          {type === "login" ? "Авторизация" : "Регистрация"}
        </DialogTitle>
        <p className="text-center    text-[#686870]">
          {type === "login"
            ? "Введите вашу почту и пароль:"
            : "Введите ваши данные:"}
        </p>
        {/* FORM */}
        {type === "login" ? (
          <LoginForm onClose={handleClose} />
        ) : (
          <RegisterForm onClose={handleClose} />
        )}

        <p className="text-[#9E9E9E] mt-4 text-center">Или</p>

        <div className="flex items-center gap-2 justify-center">
          <AuthBtn name="github" />
          <AuthBtn name="google" />
        </div>

        <button
          onClick={handleChangeType}
          className="text-[#9E9E9E] mt-4 text-center"
        >
          {type === "login" ? "Еще нет аккаунта?" : "Уже есть аккаунт?"}{" "}
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
