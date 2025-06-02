import React from "react";

const Topbar = () => {
  return (
    <div className="w-full bg-[#272635] text-white text-sm">
      <div className="flex items-center justify-center px-4 py-5">
        <span className="flex  text-[16px] cursor-pointer font-serif text-white group-hover:text-white items-center gap-2 whitespace-nowrap">
          Visit xolvie to read complaints and reviews, or file yours.
        </span>
      </div>
    </div>
  );
};

export default Topbar;
