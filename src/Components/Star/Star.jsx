import React from "react";
import { FaStar } from "react-icons/fa";

export function Star({ text, color }) {
  // { text, color }
  return (
    <div className="  text-center m-4 p-2" style={{ color }}>
      <div>
        <h2 className="text-3xl xl:text-4xl font-bold mb-3 leading-10 uppercase ">
          {text}
        </h2>
      </div>
      <div className=" flex justify-center items-center gap-4 p-2">
        <div className=" h-1 w-20" style={{ backgroundColor: color }}>
          {" "}
        </div>
        <span className="text-xl">
          <FaStar />
        </span>
        <div className=" h-1 w-20" style={{ backgroundColor: color }}>
          {" "}
        </div>
      </div>
    </div>
  );
}
