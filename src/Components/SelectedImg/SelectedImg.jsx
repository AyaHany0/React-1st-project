import React from "react";
import { FaTimes } from "react-icons/fa";

export function SelectedImg({ closeModal, img, handleClickOutside }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center h-screen  bg-[#C2DBFE] bg-opacity-75 z-50 overlay"
      onClick={handleClickOutside}
    >
      <div className="relative max-w-2xl max-h-2xl p-4 ">
        <button
          className="absolute top-4 right-4 text-white text-2xl p-4"
          onClick={closeModal}
        >
          <FaTimes />
        </button>
        <img src={img} alt="Selected" className="" />
      </div>
    </div>
  );
}
