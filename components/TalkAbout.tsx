import React, { useRef } from "react";

const cards = [
  {
    id: 1,
    name: "Dimple",
    avatar: "G",
    comments: 20,
    views: 16691,
    title: "I Have Payment and Tracking Problems in My Maternity Benefit...",
    department: "Ministry of Family Social Services",
    bg: "bg-white",
  },
  {
    id: 2,
    name: "Mehmet",
    avatar: "M",
    comments: 55,
    views: 109098,
    title: "Request for Fair Evaluation for Students Who Lost by 0.35...",
    department: "Ministry of Education",
    bg: "bg-[#6C57EC] text-white border border-white",
  },
  {
    id: 3,
    name: "Mehmet",
    avatar: "M",
    comments: 55,
    views: 109098,
    title: "Request for Fair Evaluation for Students Who Lost by 0.35...",
    department: "Ministry of Education",
    bg: "bg-[#6C57EC] text-white border border-white",
  },
  {
    id: 4,
    name: "Mehmet",
    avatar: "M",
    comments: 55,
    views: 109098,
    title: "Request for Fair Evaluation for Students Who Lost by 0.35...",
    department: "Ministry of Education",
    bg: "bg-[#6C57EC] text-white border border-white",
  },
  {
    id: 5,
    name: "Mehmet",
    avatar: "M",
    comments: 55,
    views: 109098,
    title: "Request for Fair Evaluation for Students Who Lost by 0.35...",
    department: "Ministry of Education",
    bg: "bg-[#6C57EC] text-white border border-white",
  },
  {
    id: 6,
    name: "Mehmet",
    avatar: "M",
    comments: 55,
    views: 109098,
    title: "Request for Fair Evaluation for Students Who Lost by 0.35...",
    department: "Ministry of Education",
    bg: "bg-[#6C57EC] text-white border border-white",
  },
  {
    id: 7,
    name: "Mehmet",
    avatar: "M",
    comments: 55,
    views: 109098,
    title: "Request for Fair Evaluation for Students Who Lost by 0.35...",
    department: "Ministry of Education",
    bg: "bg-[#6C57EC] text-white border border-white",
  },
  {
    id: 8,
    name: "Mehmet",
    avatar: "M",
    comments: 55,
    views: 109098,
    title: "Request for Fair Evaluation for Students Who Lost by 0.35...",
    department: "Ministry of Education",
    bg: "bg-[#6C57EC] text-white border border-white",
  },
  {
    id: 9,
    name: "Mehmet",
    avatar: "M",
    comments: 55,
    views: 109098,
    title: "Request for Fair Evaluation for Students Who Lost by 0.35...",
    department: "Ministry of Education",
    bg: "bg-[#6C57EC] text-white border border-white",
  },
  {
    id: 10,
    name: "Mehmet",
    avatar: "M",
    comments: 55,
    views: 109098,
    title: "Request for Fair Evaluation for Students Who Lost by 0.35...",
    department: "Ministry of Education",
    bg: "bg-[#6C57EC] text-white border border-white",
  },
  {
    id: 11,
    name: "Mehmet",
    avatar: "M",
    comments: 55,
    views: 109098,
    title: "Request for Fair Evaluation for Students Who Lost by 0.35...",
    department: "Ministry of Education",
    bg: "bg-[#6C57EC] text-white border border-white",
  },
  {
    id: 12,
    name: "Mehmet",
    avatar: "M",
    comments: 55,
    views: 109098,
    title: "Request for Fair Evaluation for Students Who Lost by 0.35...",
    department: "Ministry of Education",
    bg: "bg-[#6C57EC] text-white border border-white",
  },
  {
    id: 13,
    name: "Mehmet",
    avatar: "M",
    comments: 55,
    views: 109098,
    title: "Request for Fair Evaluation for Students Who Lost by 0.35...",
    department: "Ministry of Education",
    bg: "bg-[#6C57EC] text-white border border-white",
  },
  {
    id: 14,
    name: "Mehmet",
    avatar: "M",
    comments: 55,
    views: 109098,
    title: "Request for Fair Evaluation for Students Who Lost by 0.35...",
    department: "Ministry of Education",
    bg: "bg-[#6C57EC] text-white border border-white",
  },
  {
    id: 15,
    name: "Mehmet",
    avatar: "M",
    comments: 55,
    views: 109098,
    title: "Request for Fair Evaluation for Students Who Lost by 0.35...",
    department: "Ministry of Education",
    bg: "bg-[#6C57EC] text-white border border-white",
  },
];

const TalkAbout = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative bg-[#f5f6fa] py-16 overflow-hidden">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-600">
        Most Talked About
      </h2>

      <div className="relative z-10 px-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-white shadow cursor-pointer hover:bg-gray-100 transition-colors"
            aria-label="Scroll Left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-white shadow cursor-pointer hover:bg-gray-100 transition-colors"
            aria-label="Scroll Right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className={`min-w-[300px] max-w-[300px] p-5 rounded-xl shadow-md flex-shrink-0 ${card.bg}`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-teal-700 text-white rounded-full flex items-center justify-center font-bold">
                    {card.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{card.name}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      {card.views.toLocaleString()}
                    </p>
                  </div>
                </div>
                <span className="text-sm font-medium whitespace-nowrap">
                  💬 {card.comments} Comment
                </span>
              </div>
              <h3 className="font-semibold text-base leading-snug mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-blue-600 underline">
                ↩ {card.department}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TalkAbout;
