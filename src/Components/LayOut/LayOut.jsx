import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";

export function LayOut() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
