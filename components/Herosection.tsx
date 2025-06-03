"use client";
import Image from "next/image";
import React from "react";

const Herosection = () => {
  return (
    <div className="relative min-h-screen  flex px-12 gap-8 bg-transparent">
      {/* Left Column */}
      <div className="w-1/2 px-18">
        <p className="text-black text-[55px]">Complain for Solution</p>
      </div>

      {/* Right Column */}
      <div className="w-1/2 relative -mt-23">
        <Image
          src="/sv-banner.png"
          alt="Hero Banner"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Herosection;
