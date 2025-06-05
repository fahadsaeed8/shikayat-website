import React, { ReactNode, ReactElement } from "react";

interface MarqueeRowProps {
  children: ReactNode[];
  reverse?: boolean;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({
  children,
  reverse = false,
}) => {
  // Ensure children is always an array
  const childArray = React.Children.toArray(children);

  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex gap-4 w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        <div className="flex gap-4">
          {childArray.map((child, index) =>
            React.cloneElement(child as ReactElement, {
              key: `original-${index}`,
            })
          )}
        </div>
        <div className="flex gap-4">
          {childArray.map((child, index) =>
            React.cloneElement(child as ReactElement, {
              key: `duplicate-${index}`,
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default MarqueeRow;
