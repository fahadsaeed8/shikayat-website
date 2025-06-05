"use client";
import React from "react";

export default function ComplaintSection() {
  const stats = [
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#5F63F2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M4 21v-2a4 4 0 0 1 3-3.87" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      label: "Number of Individual Members",
      value: "13,198,714",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#5F63F2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      label: "Registered Trademark",
      value: "233,517",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00C4B4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      ),
      label: "Complaint Resolved",
      value: "3,778,631",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00C4B4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      label: "Visitors in the Last 30 Days",
      value: "24,262,331",
    },
  ];
  return (
    <>
      <section className="relative flex justify-between items-center px-25 py-[190px] bg-white overflow-hidden">
        {/* Left Text Section */}
        <div className="w-1/3 z-10">
          <h2 className="text-[42px] text-[#7c7b85] font-light">Complaints</h2>
          <h3 className="text-[42px] font-bold text-[#7c7b85] mb-4">Awards</h3>
          <p className="text-[#7c7b85] text-lg leading-6 max-w-xs">
            At this ceremony organized by Şikayetvar every year, we reward
            brands that make a difference in customer satisfaction. Şikayetvar
            continues to support solution-oriented experiences by bringing
            brands and customers together.
          </p>
        </div>

        {/* Center Video Section */}
        <div className="w-[1200px] z-10 flex justify-center">
          <div className="relative w-full max-w-[580px] aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>

        <div className="absolute bg-[url('/complain.png')] bg-cover bg-no-repeat right-0 top-0 w-[400px] h-full flex flex-wrap items-center justify-center gap-6 z-0"></div>
      </section>
      <div className="bg-gray-100 py-20">
        <h2 className="text-center  font-semibold text-[32px] text-[#7c7b85] mb-15">
          Complaints in Numbers
        </h2>
        <div className="flex justify-center flex-wrap gap-6 max-w-6xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 w-64 text-center"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
              <p className="text-xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
