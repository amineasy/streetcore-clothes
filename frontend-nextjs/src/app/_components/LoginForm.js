"use client";

import { IoCloseOutline } from "react-icons/io5";
import Input from "./Input";
import { CiLock } from "react-icons/ci";
import { LuCircleUser } from "react-icons/lu";
import { useModal } from "./Modal";
function LoginForm({ switchToSignUp }) {
  const { close } = useModal();
  return (
    <div className="tablet:h-110 tablet:w-120 tablet:rounded-3xl h-100 w-full rounded-2xl bg-white lg:h-120 lg:w-120">
      <form className="relative mx-auto flex h-full w-7/8 flex-col items-center gap-3">
        <div className="absolute top-0 left-0 mt-5">
          <IoCloseOutline size={34} onClick={close} />
        </div>
        <h2 className="mt-15 font-extrabold">ورود</h2>
        <label htmlFor="username" className="font-medium text-gray-800">
          نام کابری خود را وارد کنید
        </label>
        <Input
          type="text"
          classNameInput="w-full rounded-xl  p-2 pr-12"
          placeholder="نام کاربری را وارد کنید"
          icon={<LuCircleUser size={24} />}
        />
        <Input
          type="password"
          classNameInput="w-full rounded-xl  p-2 pr-12"
          placeholder="رمز عبور را وارد کنید"
          icon={<CiLock size={24} />}
        />
        <div className="flex items-center gap-3 pt-8">
          <input
            type="checkbox"
            id="terms"
            className="h-5 w-5 cursor-pointer accent-blue-600"
          />
          <label
            htmlFor="terms"
            className="cursor-pointer text-sm leading-relaxed text-gray-600 select-none"
          >
            با{" "}
            <a href="#" className="font-medium text-red-500 hover:underline">
              قوانین و مقررات
            </a>{" "}
            و{" "}
            <a
              href="#"
              className="text-freshgreen-500 font-medium hover:underline"
            >
              سیاست حفظ حریم خصوصی
            </a>{" "}
            موافقم
          </label>
        </div>
        <button
          type="submit"
          className="mt-5 h-10 w-full rounded-xl bg-red-500"
        >
          ورود
        </button>
        <p
          className="mt-5 mr-4 ml-auto cursor-pointer font-extrabold text-gray-700 underline underline-offset-6"
          onClick={switchToSignUp}
        >
          ثبت نام نکردید؟
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
