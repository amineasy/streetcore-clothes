"use client";

import { createContext, useContext, useState, cloneElement } from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext();

function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: open,
  });
}


function Content({ children }) {
  const { isOpen, close } = useContext(ModalContext);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md transition-all duration-500"
    >
        {children}
    </div>,
    document.body
  );
}


export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Modal components must be inside <Modal>");
  return context;
}

Modal.Open = Open;
Modal.Content = Content;

export default Modal;
