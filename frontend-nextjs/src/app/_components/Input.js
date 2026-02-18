import Image from "next/image";

function Input({ type, placeholder, classNameInput = "",svg=false, icon, iconSize = 24 }) {
  return (
    <div className="relative w-full">
      {" "}
      <input
        type={type}
        placeholder={placeholder}
        className={`${classNameInput} focus:ring-softlavender-200 focus:ring-2 focus:outline-none shadow-md `}
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">

        {icon && !svg && <div>{icon}</div>}
        {icon && svg && <Image alt="تصویر" src={icon}  width={iconSize} height={iconSize} />}
      </div>
    </div>
  );
}

export default Input;
