import Image from "next/image";
import Logo from "../../../public/Free Logo [from www.logo.im] (1).svg";
import searchIcon from "@/app/_styles/svg/icons8-search.svg";
import { CiUser } from "react-icons/ci";
import HeaderButton from "./HeaderButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { BiHomeAlt2 } from "react-icons/bi";

function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full bg-naturetone-500 shadow-lg">
        <div className="relative flex items-center justify-between gap-5 pt-2">
          <div className="flex items-center gap-5">
            <Image
              src={Logo}
              width={120}
              height={120}
              alt="لوگو"
              className=""
            />

            {/* بخش سرچ (با آیکون داخل input) */}
            <div className="relative">
              {" "}
              {/* flex-1 تا عرض بگیره */}
              <input
                type="text"
                placeholder="کلمه مورد نظر را وارد کنید..."
                className="focus:ring-softlavender-200 h-12 w-125 rounded border-[0.1px] bg-white pr-12 pl-4 text-right shadow-md focus:ring-2 focus:outline-none lg:w-100 xl:w-110 2xl:w-125"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                <Image src={searchIcon} alt="جستجو" width={20} height={20} />
              </div>
            </div>
          </div>

          {/* بخش ورود/کاربر */}
          <div className="flex flex-row gap-3">
            <HeaderButton span1="کاربر" span2="ورود / ثبت نام">
              {" "}
              <CiUser size={24} className="text-gray-700" />
            </HeaderButton>
            <HeaderButton span1="سبد خرید" span2="خالی است">
              {" "}
              <MdOutlineShoppingCart size={24} className="text-gray-700" />
            </HeaderButton>
          </div>
        </div>
        <div className="flex items-center justify-between gap-5">
          <ul className="relative flex items-center gap-5 font-medium text-gray-800 lg:text-sm 2xl:text-base">
            <li className="hover:bg-freshgreen-400 flex items-center gap-2 rounded-xl p-2 transition-colors">
              <span className="">
                <BiHomeAlt2 />
              </span>
              صفحه اصلی
            </li>
            <li className="group hover:bg-freshgreen-400 cursor-pointer rounded-xl p-2 transition-all duration-250 ease-out">
              <span>مردانه</span>
              <div className="invisible absolute bg-naturetone-500 top-full right-0 z-50 mr-3 -translate-y-2 scale-95 rounded-b-xl  opacity-0 shadow-lg transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 lg:mt-0.5 lg:w-250 2xl:mt-0 2xl:w-350">
                <div className="m-3 grid h-full grid-cols-6">
                  <div className="flex h-full flex-col justify-between gap-3 leading-relaxed font-medium lg:text-xs 2xl:text-sm">
                    <ul className="">
                      <li className="font-semibold text-red-400 hover:text-red-500 underline underline-offset-3">
                        تیشرت
                      </li>
                      <li className="mt-1 mr-3 opacity-70 hover:opacity-100">
                        آستین کوتاه
                      </li>
                      <li className="mr-3 opacity-70 hover:opacity-100">
                        آستین بلند
                      </li>
                    </ul>
                    <ul>
                      <li className="font-semibold text-red-400 hover:text-red-500 underline underline-offset-3">
                        پیراهن
                      </li>
                      <li className="mt-1 mr-3 opacity-70 hover:opacity-100">
                        آستین کوتاه
                      </li>
                      <li className="mr-3 opacity-70 hover:opacity-100">
                        آستین بلند
                      </li>
                    </ul>
                    <ul>
                      <li className="font-semibold text-red-400 hover:text-red-500 underline underline-offset-3">
                        شلوار و اسلش
                      </li>
                      <li className="mr-3 opacity-70 hover:opacity-100">
                        شلوار
                      </li>
                      <li className="mr-3 opacity-70 hover:opacity-100">
                        شلوار جین
                      </li>
                      <li className="mr-3 opacity-70 hover:opacity-100">
                        شلوار کان و پارچه ای
                      </li>
                      <li className="mr-3 opacity-70 hover:opacity-100">
                        شلوارک
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex h-full flex-col justify-evenly gap-3 text-sm leading-relaxed font-medium">
                      <ul className="">
                        <li className="font-semibold text-red-400 hover:text-red-500 underline underline-offset-3">
                          کفش و کتان
                        </li>
                        <li className="mt-1 mr-3 opacity-70 hover:opacity-100">
                          کفش
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          کتانی
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          کالج
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          بوت
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          نگهداری و لوازم جانبی کفش
                        </li>
                      </ul>
                      <ul>
                        <li className="font-semibold text-red-400 hover:text-red-500 underline underline-offset-3">
                          صندلی و دمپایی
                        </li>
                      </ul>
                      <ul>
                        <li className="font-semibold text-red-400 hover:text-red-500 underline underline-offset-3">
                          ست
                        </li>
                        <li className="mt-1 mr-3 opacity-70 hover:opacity-100">
                          ست هودی سیشرت و شلوار
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          ست تیشرت پیراهن وشلوار
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          ست تیشرت پیراهن و شلوارک
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          ست تاپ و شلوارک
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          ست کت و شلوار
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          ست ورزشی
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="flex h-full flex-col justify-between gap-3 text-sm leading-relaxed font-medium">
                      <ul className="">
                        <li className="font-semibold text-red-400 hover:text-red-500 underline underline-offset-3">
                          کاپشن و پالتو
                        </li>
                        <li className="mt-1 mr-3 opacity-70 hover:opacity-100">
                          کاپشن
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          پالتو
                        </li>
                      </ul>
                      <ul>
                        <li className="font-semibold text-red-400 hover:text-red-500 underline underline-offset-3">
                          سویشرت و هودی
                        </li>
                      </ul>
                      <ul>
                        <li className="font-semibold text-red-400 hover:text-red-500 underline underline-offset-3">
                          بافت و ژاکت
                        </li>
                      </ul>
                      <ul>
                        <li className="font-semibold text-red-400 hover:text-red-500 underline underline-offset-3">
                          تک کت و جلیقه
                        </li>
                        <li className="mt-1 mr-3 opacity-70 hover:opacity-100">
                          تک کت
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          جلیقه
                        </li>
                      </ul>
                      <ul>
                        <li className="font-semibold text-red-400 hover:text-red-500 underline underline-offset-3">
                          لباس زیر
                        </li>
                        <li className="mt-1 mr-3 opacity-70 hover:opacity-100">
                          شرت
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          رکابی
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="flex h-full flex-col justify-between gap-3 text-sm leading-relaxed font-medium">
                      <ul className="">
                        <li className="font-semibold text-red-400 hover:text-red-500 underline underline-offset-3">
                          اکسسوری
                        </li>
                        <li className="mt-1 mr-3 opacity-70 hover:opacity-100">
                          انگشتر
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          ساسبند
                        </li>

                        <li className="mr-3 opacity-70 hover:opacity-100">
                          کمربند مردانه
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          ساعت مردانه
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          کیف و کوله
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          عینک مردانه
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          گردنبند مردانه
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          کراوات و پاپیون
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="flex h-full flex-col justify-between gap-3 text-sm leading-relaxed font-medium">
                      <ul>
                        <li className="font-semibold text-red-400 hover:text-red-500 underline underline-offset-3">
                          آرایشی بهداشتی
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          عطر و ادکلن
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          لوازم بهداشتی
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          مراقبت پوستی
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="group hover:bg-freshgreen-400 cursor-pointer rounded-xl p-2 transition-all duration-250 ease-out">
              <span>زنانه</span>
              <div className="invisible absolute top-full right-0 z-50 mr-3 -translate-y-2 scale-95 rounded-b-xl bg-naturetone-500 opacity-0 shadow-lg transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 lg:mt-0.5 lg:w-250 2xl:mt-0 2xl:w-350">
                <div className="m-3 grid h-full grid-cols-6">
                  <div className="flex h-full flex-col justify-between gap-3 leading-relaxed font-medium lg:text-xs 2xl:text-sm">
                    <ul className="">
                      <li className="font-semibold text-red-400 hover:text-red-500 underline underline-offset-3">
                        مانتو
                      </li>
                    </ul>
                    <ul>
                      <li className="font-semibold text-red-400 hover:text-red-500 underline underline-offset-3">
                        شلوار و شلوراک
                      </li>
                      <li className="mt-1 mr-3 opacity-70 hover:opacity-100">
                        شلوار جین
                      </li>
                      <li className="mr-3 opacity-70 hover:opacity-100">
                        لگ و ساپورت
                      </li>
                    </ul>
                    <ul>
                      <li className="font-semibold text-red-400 hover:text-red-500 underline underline-offset-3">
                        کیف و کفش
                      </li>
                      <li className="mr-3 opacity-70 hover:opacity-100">کیف</li>
                      <li className="mr-3 opacity-70 hover:opacity-100">
                        کتانی
                      </li>
                      <li className="mr-3 opacity-70 hover:opacity-100">
                        کفش و کالج
                      </li>
                      <li className="mr-3 opacity-70 hover:opacity-100">
                        بوت و نیم بوت
                      </li>
                      <li className="mr-3 opacity-70 hover:opacity-100">
                        صندل و روفرشی
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex h-full flex-col justify-evenly gap-3 text-sm leading-relaxed font-medium">
                      <ul className="">
                        <li className="font-semibold text-red-400 hover:text-red-500 underline underline-offset-3">
                          ست
                        </li>
                        <li className="mt-1 mr-3 opacity-70 hover:opacity-100">
                          ست مانتو شلوار
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          ست تیشرت و شلوار
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          ست تاپ و شلوارک
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          ست هودی
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          ست تیشترت و شلوارک
                        </li>
                      </ul>
                      <ul>
                        <li className="font-semibold text-red-400 hover:text-red-500 underline underline-offset-3">
                          سویشرت و هودی
                        </li>
                      </ul>
                      <ul>
                        <li className="font-semibold text-red-400 hover:text-red-500 underline underline-offset-3">
                          کاپشن و پالتو
                        </li>
                      </ul>
                      <ul>
                        <li className="font-semibold text-red-400 hover:text-red-500 underline underline-offset-3">
                          بافت و ژاکت
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="flex h-full flex-col justify-between gap-3 text-sm leading-relaxed font-medium">
                      <ul className="">
                        <li className="font-semibold text-red-400 hover:text-red-500 underline underline-offset-3">
                          اکسسوری
                        </li>
                        <li className="mt-1 mr-3 opacity-70 hover:opacity-100">
                          کلاه
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          عینک
                        </li>

                        <li className="mr-3 opacity-70 hover:opacity-100">
                          ساعت زنانه
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          کمربند
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          جوراب
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          دستکش
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          شال و روسری
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          دستبند و گردنبند
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="flex h-full flex-col justify-between gap-3 text-sm leading-relaxed font-medium">
                      <ul>
                        <li className="font-semibold text-red-400 hover:text-red-500 underline underline-offset-3">
                          آرایشی بهداشتی
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          عطر و ادکلن
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          لوازم بهداشتی
                        </li>
                        <li className="mr-3 opacity-70 hover:opacity-100">
                          مراقبت پوستی
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="hover:bg-freshgreen-400 cursor-pointer rounded-xl p-2 transition-all duration-250 ease-out">
              تماس با ما
            </li>
            <li className="hover:bg-freshgreen-400 cursor-pointer rounded-xl p-2 transition-all duration-250 ease-out">
              پیگیری سفارشات
            </li>
            <li className="hover:bg-freshgreen-400 cursor-pointer rounded-xl p-2 transition-all duration-250 ease-out">
              حراج
            </li>
          </ul>
          <HeaderButton span1="09152548">
            {" "}
            <IoCallOutline size={24} className="text-gray-700" />
          </HeaderButton>
        </div>
      </header>
    </>
  );
}

export default Header;
