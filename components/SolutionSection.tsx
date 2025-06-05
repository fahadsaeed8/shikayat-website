"use client";

import { useState } from "react";
import Image from "next/image";

const mockData = [
  {
    id: 1,
    name: "Signal",
    logo: "/signal.png",
    score: 50,
    movement: "+2",
    movementType: "up",
  },
  {
    id: 2,
    name: "Parodontax",
    logo: "/signal.png",
    score: 44,
    movement: "-1",
    movementType: "down",
  },
  {
    id: 3,
    name: "Sensodyne",
    logo: "/signal.png",
    score: 42,
    movement: "-1",
    movementType: "down",
  },
  {
    id: 4,
    name: "Colgate",
    logo: "/signal.png",
    score: 6,
    movement: "+1",
    movementType: "up",
  },
  {
    id: 5,
    name: "Oral-B",
    logo: "/signal.png",
    score: 5,
    movement: "-1",
    movementType: "down",
  },
  {
    id: 6,
    name: "Pepsodent",
    logo: "/signal.png",
    score: 45,
    movement: "+3",
    movementType: "up",
  },
  {
    id: 7,
    name: "Close-Up",
    logo: "/signal.png",
    score: 30,
    movement: "-2",
    movementType: "down",
  },
  {
    id: 8,
    name: "Theramed",
    logo: "/signal.png",
    score: 29,
    movement: "+1",
    movementType: "up",
  },
  {
    id: 9,
    name: "Marvis",
    logo: "/signal.png",
    score: 60,
    movement: "+4",
    movementType: "up",
  },
  {
    id: 10,
    name: "Elmex",
    logo: "/signal.png",
    score: 32,
    movement: "-3",
    movementType: "down",
  },
];

export default function SolutionSection() {
  const [visibleCount, setVisibleCount] = useState(5);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3); // 3 more on each click
  };

  return (
    <main className="min-h-screen bg-[#272635] rounded-br-[50px] text-white py-10 px-4">
      <h1 className="text-[52px] tracking-[0.9] pt-10 font-semibold text-center mb-6">
        Solution Success
      </h1>

      <div className="flex justify-center pt-8 gap-4 mb-4 flex-wrap">
        <div className="relative w-fit">
          <select className="appearance-none bg-[#3B3847] text-white cursor-pointer px-4 py-3 pr-10 rounded-full text-sm">
            <option>Toothbrushes and Oral Care Products</option>
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 bg-[#3B3847] text-white text-sm rounded-full">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Last 1 Year
        </button>
      </div>

      <p className="text-center text-xs pt-5 text-gray-400 mb-10 max-w-xl mx-auto">
        This ranking is based solely on complainant satisfaction scores,
        regardless of the size of the companies, number of complaints, and
        complaint rates.
      </p>

      <div className="flex flex-col gap-4 max-w-2xl mx-auto">
        {mockData.slice(0, visibleCount).map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center justify-between p-4 rounded-xl ${
              item.movementType === "up" ? "bg-[#E7FAF2]" : "bg-[#FFE9EC]"
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`text-sm w-10 h-10 flex flex-col items-center justify-center font-bold rounded-md ${
                  item.movementType === "up" ? "text-green-600" : "text-red-500"
                }`}
              >
                {item.movement}
                <span>{item.movementType === "up" ? "↑" : "↓"}</span>
              </div>
              <div className="w-17 h-14 bg-white rounded-[14px] flex items-center justify-center shadow-sm">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <span className="text-base font-semibold text-black">
                {index + 1}. {item.name}
              </span>
            </div>
            <div className="ml-auto flex items-center gap-1 bg-[#F0F0F0] px-3 py-1 rounded-md text-black font-bold text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="#FFA500"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.748l-6 5.982 1.416 8.27L12 19.771l-7.416 4.229L6 15.73 0 9.748l8.332-1.593z" />
              </svg>
              {item.score}
              <span className="font-medium text-[10px]">/100</span>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < mockData.length && (
        <div className="flex justify-center items-center">
          <button
            onClick={handleShowMore}
            className="ml-4 px-16 py-4 mt-10 cursor-pointer text-sm border bg-transparent text-white rounded-full hover:bg-white hover:text-black font-semibold transition duration-200"
          >
            Show More
          </button>
        </div>
      )}
    </main>
  );
}
