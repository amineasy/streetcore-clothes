"use client";
import { useState } from "react";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import HeaderButton from "./HeaderButton";
import { CiUser } from "react-icons/ci";
import { AnimatePresence, motion } from "framer-motion";

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
        <AnimatePresence mode="wait">
          {mode === "login" ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <LoginForm switchToSignUp={() => setMode("signup")} />
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <SignUpForm switchToLogin={() => setMode("login")} />
            </motion.div>
          )}
        </AnimatePresence>
      </Modal.Content>
    </Modal>
  );
}
