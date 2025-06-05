import { useRouter } from "next/navigation";
import React from "react";

interface HeaderProps {
  setLoginModal: (value: boolean) => void;
}

const Header = ({ setLoginModal }: HeaderProps) => {
  const router = useRouter();
  return (
    <header className="w-full bg-transparent border-t-2 mt-1 border-dotted border-red-500  text-sm font-medium relative z-10">
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left - Logo and Menu */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <div className="flex items-center space-x-1 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#00c7b1"
              className="w-5 h-5"
            >
              <path d="M20.285 2.859l1.415 1.415L8.414 17.56l-6.114-6.114 1.414-1.415L8.414 14.73z" />
            </svg>
            <span className="text-[#1d1f4f] font-semibold text-[20px]">
              şhikayat
            </span>
          </div>

          {/* Menu */}
          <nav className="hidden sm:flex space-x-5">
            <span className="text-[#7c7b85] text-[16px] font-semibold cursor-default">
              Complaints
            </span>
            <span className="text-black text-[16px] font-semibold cursor-pointer">
              Trend <sup className="text-xs font-normal">100</sup>
            </span>
          </nav>
        </div>

        {/* Right - Auth and Button */}
        <div className="flex items-center space-x-6">
          <span
            onClick={() => setLoginModal(true)}
            className="text-[#7c7b85] text-[16px] font-semibold cursor-pointer"
          >
            Login / Sign Up
          </span>
          <div
            onClick={() => router.push("/complaint-method")}
            className="border-2 border-dotted border-red-500 rounded-full p-[2px] cursor-pointer"
          >
            <button
              type="button"
              className="bg-[#5a28ff] text-white text-[16px] font-semibold px-4 py-[6px] rounded-full flex justify-center items-center gap-[6px] cursor-pointer"
            >
              <span className="text-[24px] mr-1">+</span> Write a Complaint
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
