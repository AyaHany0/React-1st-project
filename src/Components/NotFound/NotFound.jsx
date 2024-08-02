import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
export function NotFound() {
  return (
    <div className="mt-32">
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-[#1Ace9e] ">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-[#1ABC9C] md:text-4xl d">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-[#242C33">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{"{"}" "{"}"}
          </p>
          <Link
            to=""
            className="inline-flex text-[#242C33] bg-#1ABC9C hover:bg-[#1Ace9e] focus:ring-2 focus:outline-none focus:ring-[#1Ace95] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
