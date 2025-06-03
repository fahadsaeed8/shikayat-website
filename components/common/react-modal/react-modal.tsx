"use client";
import React, { useEffect, ReactNode } from "react";
import Modal from "react-modal";

const customStyles: Modal.Styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 0,
    outline: "none",
    width: "fit-content",
    height: "fit-content",
    margin: "auto",
    borderRadius: "16px",
    backfaceVisibility: "hidden",
  },
};

interface ReactModalProps {
  modalIsOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: ReactNode;
}

const ReactModal: React.FC<ReactModalProps> = ({
  modalIsOpen,
  setIsOpen,
  children,
}) => {
  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [modalIsOpen]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
      ariaHideApp={false} // Optional: To avoid warning in Next.js
    >
      {children}
    </Modal>
  );
};

export default ReactModal;
