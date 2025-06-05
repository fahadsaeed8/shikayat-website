"use client";
import Image from "next/image";
import React from "react";
import SearchBar from "./SearchBar";

const Herosection = () => {
  return (
    <div className="relative min-h-screen bg-[#f7f8fc] flex px-12 gap-8">
      {/* Left Column */}
      <div className="w-1/2 pt-[130px] px-[110px] flex flex-col justify-between">
        {/* Top Heading */}
        <div>
          <p className="text-[#383838] text-[55px] leading-tight">
            Complain <span className="font-bold">for Solution</span>
          </p>

          {/* Search Bar */}
          <div className="mt-20">
            <SearchBar />
          </div>
        </div>

        {/* Bottom Paragraph */}
        <p className="text-[#85878e] text-[28px] font-medium mt-[100px] leading-tight">
          Complaints on the Agenda
        </p>
      </div>

      {/* Right Column - Image */}
      <div className="w-1/2 relative flex items-end justify-end">
        <Image
          src="/sv-banner.png"
          alt="Hero Banner"
          width={600}
          height={800}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Herosection;
