"use client";

import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className = "" }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      />

      {/* Modal content */}
      <div
        className={`relative bg-white rounded-xl w-[90%] max-w-[500px] h-auto p-4 z-10 ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 font-bold hover:text-black transition"
        >
          ✕
        </button>

        {/* Content (iframe in your case) */}
        <div className="w-full h-[400px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
