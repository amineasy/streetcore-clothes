"use client";



function HeaderButton({ span1, span2, children, ...props }) {
  return (
    <div className="flex items-center gap-3 px-4 py-2 min-w-35 justify-between shrink-0   " {...props}>
      <button className="flex flex-col text-right text-xs">
        {!span2 ? (
          <span className="font-bold">{span1}</span>
        ) : (
          <>
            <span className="font-normal text-gray-600">{span1}</span>
            <span className="font-extrabold text-gray-700">{span2}</span>
          </>
        )}
      </button>
      {children}
    </div>
  );
}


export default HeaderButton;