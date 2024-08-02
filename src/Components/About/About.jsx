import React from "react";
import { Star } from "../Star/Star";
import { Helmet } from "react-helmet";
export function About() {
  return (
    <div className="flex justify-center items-center text-white bg-[#1ABC9C] pt-40 pb-40 mt-20">
      <div>
        <Star text={"About component"} color={"white"} />
        <Helmet>
          <title>About</title>
        </Helmet>
        <div className="container mx-auto w-3/4 flex flex-col justify-center items-center gap-6 md:flex-row">
          <div className="">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div>
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
