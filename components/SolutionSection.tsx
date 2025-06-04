"use client";

import Image from "next/image";

const data = [
  {
    id: 1,
    name: "Signal",
    logo: "/logos/signal.png",
    score: 50,
    movement: "+2",
    movementType: "up",
  },
  {
    id: 2,
    name: "Parodontax",
    logo: "/logos/parodontax.png",
    score: 44,
    movement: "-1",
    movementType: "down",
  },
  {
    id: 3,
    name: "Sensodyne",
    logo: "/logos/sensodyne.png",
    score: 42,
    movement: "-1",
    movementType: "down",
  },
  {
    id: 4,
    name: "Colgate",
    logo: "/logos/colgate.png",
    score: 6,
    movement: "+1",
    movementType: "up",
  },
  {
    id: 5,
    name: "Oral-B",
    logo: "/logos/oralb.png",
    score: 5,
    movement: "-1",
    movementType: "down",
  },
];

export default function SolutionSection() {
  return (
    <main className="min-h-screen bg-[#2A2634] rounded-br-[50px] text-white py-10 px-4">
      <h1 className="text-[42px] pt-10 font-semibold text-center mb-6">
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

        <button className="flex items-center gap-2 px-4 py-2  text-white text-sm rounded-md ">
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
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center justify-between p-4  rounded-xl ${
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
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-base font-semibold text-black">
                {index + 1}. {item.name}
              </span>
            </div>
            <div className="flex items-center gap-1 bg-[#F0F0F0] px-3 py-1 rounded-md text-black font-medium text-sm">
              🔶 {item.score}/100
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
