import React, { useState } from "react";
import avatar from "../../assets/imgs/avataaars.svg";
import { Star } from "../Star/Star";
import { Helmet } from "react-helmet";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center text-center text-white bg-[#1ABC9C] pt-40 pb-20">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <img src={avatar} alt="Avatar" style={{ width: 250, margin: "auto" }} />

        <Star text={"start framework"} color={"white"} />
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  );
}
