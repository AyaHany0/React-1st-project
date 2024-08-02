import React, { useEffect, useState } from "react";
import { Star } from "../Star/Star";
import house from "../../assets/imgs/poert1.png";
import cake from "../../assets/imgs/port2.png";
import circus from "../../assets/imgs/port3.png";
import { HiOutlinePlusSm } from "react-icons/hi";
import { SelectedImg } from "../SelectedImg/SelectedImg";
import { Helmet } from "react-helmet";
export function Portfolio() {
  const imgs = [house, cake, circus, house, cake, circus];
  const [selectedImg, setSelectedImg] = useState(null);
  const openModal = (img) => {
    console.log(123);
    console.log(img);
    setSelectedImg(img);
  };
  const closeModal = () => {
    setSelectedImg(null);
  };
  const handleClickOutside = (event) => {
    if (event.target.classList.contains("overlay")) {
      closeModal();
    }
  };
  const handleEscapeKey = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };
  useEffect(() => {
    if (selectedImg) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [selectedImg]);

  return (
    <div>
      <div className="container mx-auto mt-36">
        <Helmet>
          <title>Portfolio</title>
        </Helmet>
        <Star text={"portfolio component"} color={"#2C3E50"} />
        <div className="grid gap-5 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-7xl mx-auto mb-5 ">
          {imgs.map((img, index) => {
            return (
              <div
                key={index}
                className="m-3 relative rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => openModal(img)}
              >
                <img
                  src={img}
                  alt={`Portfolio ${index}`}
                  className="w-full rounded-xl"
                />
                <div className="  rounded-xl absolute bg-[#1ABA9F] w-ful inset-0 flex justify-center items-center text-white text-9xl font-extrabold opacity-0 transition-opacity duration-300 group-hover:opacity-90">
                  <HiOutlinePlusSm />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {selectedImg && (
        <SelectedImg
          closeModal={closeModal}
          img={selectedImg}
          handleClickOutside={handleClickOutside}
        />
      )}
    </div>
  );
}
