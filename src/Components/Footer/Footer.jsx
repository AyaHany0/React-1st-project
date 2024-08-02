import React from "react";

import { FaFacebook, FaGlobe, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <div>
      <div className=" text-center bg-[#2C3E50] p-10 text-white ">
        <div className="m-4 grid sm:grid-cols-3 gap-x-5 gap-y-10 2xl:grid-cols-3">
          <div className="m-3 flex flex-col justify-center gap-3 ">
            <h3 className="font-semibold text-3xl ">LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="m-3 flex flex-col justify-center gap-4">
            <h3 className="font-semibold text-3xl ">AROUND THE WEB</h3>
            <div className="flex gap-3 justify-center text-xl mt-3">
              <span className=" text-xl border border-white border-solid rounded-full p-2 cursor-pointer hover:bg-white hover:text-[#2C3E50]">
                <FaFacebook />
              </span>
              <span className=" text-xl border border-white border-solid rounded-full p-2  cursor-pointer hover:bg-white hover:text-[#2C3E50]">
                <FaTwitter />
              </span>
              <span className=" text-xl border border-white border-solid rounded-full p-2  cursor-pointer hover:bg-white hover:text-[#2C3E50]">
                <FaLinkedinIn />
              </span>
              <span className=" text-xl border border-white border-solid rounded-full p-2  cursor-pointer hover:bg-white hover:text-[#2C3E50]">
                <FaGlobe />
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <h3 className="font-semibold text-3xl m-3">ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <div className="text-white bg-[#1A252F] text-center p-4">
        <p className="p-2 mb-2">Copyright © Your Website 2021</p>
      </div>
    </div>
  );
}
