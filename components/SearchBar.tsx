import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden w-full max-w-md">
      <div className="px-4 text-gray-400">
        <svg
          className="w-4 h-4 text-gray-800 text-[24px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search for brand, model, product"
        className="flex-grow text-sm py-3 text-gray-600 placeholder-gray-500 placeholder:text-bold bg-transparent focus:outline-none"
      />
      <button className="bg-[#3ad08f] cursor-pointer py-3 text-white text-sm font-semibold px-5 rounded-full hover:bg-green-600 transition">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
