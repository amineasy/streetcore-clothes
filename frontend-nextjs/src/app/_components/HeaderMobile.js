import { IoMdList } from "react-icons/io";
import SearchIcon from "@/app/_styles/svg/icons8-search.svg";
import Input from "./Input";
import { IoIosCall } from "react-icons/io";

function HeaderMobile() {
  return (
    <div className="  h-28 md:h-30 w-full  rounded-xl px-5 py-5 bg-white  mx-auto mt-2 ">
      <div className="flex items-center justify-between">
        <button type="button" className="">
          <i>
            <IoMdList size={24} />
          </i>
        </button>
        <button type="button" className="">
          <i>
            <IoIosCall size={24} />
          </i>
        </button>

      </div>
      <div className="lg:text:sm mt-2 flex items-center justify-center text-xs">
        <div className="h-10 md:h-12 w-full bg-red-500">
          <Input
            iconSize={20}
            type="text"
            svg={true}
            placeholder="کلمه مورد نظر را وارد کنید"
            icon={SearchIcon}
            classNameInput="    pr-12 pl-4 text-right   "
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderMobile;
