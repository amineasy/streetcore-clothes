import { BiHomeAlt2 } from "react-icons/bi"
import { CiUser } from "react-icons/ci"
import { MdOutlineShoppingCart } from "react-icons/md"
import {iOutlineMenu} from "react-icons"
import { FiMenu } from "react-icons/fi";


function BottomBar() {
    return (
    <div className="fixed bottom-0 left-0 w-full h-16 bg-white shadow-t-lg z-50 flex justify-around items-center border-t">
      {/* Home */}
      <button className="flex flex-col items-center justify-center text-gray-700 hover:text-freshgreen-500">
        <BiHomeAlt2 size={24} />
        <span className="text-xs mt-1">خانه</span>
      </button>

      {/* Categories */}
      <button className="flex flex-col items-center justify-center text-gray-700 hover:text-freshgreen-500">
        <FiMenu size={24} />
        <span className="text-xs mt-1">دسته‌ها</span>
      </button>

      {/* Cart */}
      <button className="flex flex-col items-center justify-center text-gray-700 hover:text-freshgreen-500">
        <MdOutlineShoppingCart size={24} />
        <span className="text-xs mt-1">سبد خرید</span>
      </button>

      {/* Profile / User */}
      <button className="flex flex-col items-center justify-center text-gray-700 hover:text-freshgreen-500">
        <CiUser size={24} />
        <span className="text-xs mt-1">پروفایل</span>
      </button>
    </div>
    )
}

export default BottomBar
