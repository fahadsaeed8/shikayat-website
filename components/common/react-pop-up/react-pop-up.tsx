"use client";

import React, { ReactNode } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

interface MenuItem {
  label: string;
  action: string;
}

interface ReactPopUPProps {
  openPopUp: boolean;
  setOpenPopUp: (open: boolean) => void;
  handleMenuClick: (action: string) => void;
  menuItems: MenuItem[];
  children: ReactNode;
}

const ReactPopUP: React.FC<ReactPopUPProps> = ({
  openPopUp,
  setOpenPopUp,
  handleMenuClick,
  menuItems,
  children,
}) => {
  return (
    <div className="relative">
      {/* Popup component */}
      <Popup
        trigger={children}
        position="bottom right"
        closeOnDocumentClick
        nested
        open={openPopUp}
        onOpen={() => setOpenPopUp(true)}
        onClose={() => setOpenPopUp(false)}
        contentStyle={{
          width: "190px",
          borderRadius: "9px 9px 0px 22px",
          backgroundColor: "#F2F2F2",
          padding: "27px",
        }}
      >
        {/* Dropdown menu */}
        <div className="flex flex-col items-center">
          <ul className="w-full">
            {menuItems.map((item, index) => (
              <li key={index} className="w-full">
                <button
                  className={`w-full border-b text-center ${
                    index === 0 ? "pt-0 pb-2" : "py-2"
                  } text-xs font-medium text-black`}
                  onClick={() => handleMenuClick(item.action)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Popup>
    </div>
  );
};

export default ReactPopUP;
