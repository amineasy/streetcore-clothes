"use client";
import { useState } from "react";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import HeaderButton from "./HeaderButton";
import { CiUser } from "react-icons/ci";

export default function AuthModal() {
  const [mode, setMode] = useState("login");

  return (
    <Modal>
      <Modal.Open>
        
        <HeaderButton span1="کاربر" span2="ورود / ثبت نام">
          <CiUser size={24} className="text-gray-700" />
        </HeaderButton>
      </Modal.Open>

      <Modal.Content>
        {mode === "login" ? (
          <LoginForm switchToSignUp={() => setMode("signup")} />
        ) : (
          <SignUpForm switchToLogin={() => setMode("login")} />
        )}
      </Modal.Content>
    </Modal>
  );
}
