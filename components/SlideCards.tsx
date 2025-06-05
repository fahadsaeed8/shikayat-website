import React from "react";
import MarqueeRow from "./MarqueeRow";

interface CardData {
  id: number;
  avatar: string;
  name: string;
  department: string;
  views: number;
  title: string;
  image: string;
}

interface SlideCardsProps {
  cards: CardData[];
}

const Card: React.FC<{ data: CardData }> = ({ data }) => (
  <div className="min-w-[520px] h-auto bg-white shadow p-4 rounded-xl flex items-center justify-between gap-">
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <img
          src={data.avatar}
          alt="Avatar"
          className="w-8 h-8 rounded-full object-cover"
        />

        <div className="flex items-center gap-1 text-sm">
          <span className="font-semibold">{data.name}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-xs text-blue-600">{data.department}</span>
        </div>
      </div>

      <div className="flex items-center text-gray-500 text-xs gap-1">
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
        <span>{data.views.toLocaleString()}</span>
      </div>
      <p className="text-base text-[16px] font-semibold leading-snug max-w-xs whitespace-normal">
        {data.title}
      </p>
    </div>

    <img
      src={data.image}
      alt="preview"
      className="w-24 h-auto rounded-md border border-dashed border-red-300"
    />
  </div>
);

const SlideCards: React.FC<SlideCardsProps> = ({ cards }) => {
  return (
    <div className="space-y-6">
      <MarqueeRow>
        {cards.map((card) => (
          <Card key={`row1-${card.id}`} data={card} />
        ))}
      </MarqueeRow>

      <MarqueeRow reverse>
        {cards.map((card) => (
          <Card key={`row2-${card.id}`} data={card} />
        ))}
      </MarqueeRow>
    </div>
  );
};

export default SlideCards;
