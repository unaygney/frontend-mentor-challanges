import React, { useState } from "react";
import data from "../../../data.json";
import TopBar from "../TopBar";
import { useData } from "../../context/DataContext";
import { constant } from "./constant";

function Main() {
  const { planet, planetImage, setPlanetImage, setPlanetInfo, planetInfo } =
    useData();
  const colors = [
    "#419EBB",
    "#EDA249",
    "#6D2ED5",
    "#D14C32",
    "#D83A34",
    "#CD5120",
    "#1EC1A2",
    "#2D68F0",
  ];
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const currentPlanet = data[planet];
  const currentPlanetImage = data[planet].images[planetImage];
  const currentPlanetInfo = data[planet][planetInfo].content;

  const handleClick = (e, idx) => {
    if (idx === 0) {
      setPlanetImage("planet");
      setPlanetInfo("overview");
    } else if (idx === 1) {
      setPlanetImage("internal");
      setPlanetInfo("structure");
    } else {
      setPlanetImage("geology");
      setPlanetInfo("geology");
    }
  };

  return (
    <main className="px-6 lg:container lg:mx-auto  ">
      {/* For Mobile Top Bar */}
      <TopBar />

      {/* Image */}
      {planetImage !== "geology" ? (
        <div className="lg:flex lg:flex-row lg:items-center">
          <div className="w-full flex justify-center mt-24 md:mt-[146px]">
            <div
              className={`z-10  "w-[111px] h-[111px] md:w-[184px] md:h-[184px] lg:w-[450px] lg:h-[450px] `}
            >
              <img
                className={`w-full h-full block  `}
                src={currentPlanetImage}
                alt={`${currentPlanet.name} image`}
              />
            </div>
          </div>
          {/* Main Content */}
          <div className="flex flex-col md:flex-row lg:w-[400px] lg:flex-col gap-24 md:gap-[69px] lg:gap-6 w-full items-center mt-24 md:mt-[146px] lg:mt-20  ">
            <div className="flex flex-col flex-1  items-center md:items-start ">
              <h1 className="heading-m mb-4 ">{currentPlanet.name}</h1>
              <p className="custom-text text-center md:text-start leading-6 opacity-60">
                {currentPlanetInfo}
              </p>
              <div className="flex gap-1 mt-8 ">
                <p className="custom-text text-center leading-6 opacity-60">
                  Source:
                </p>
                <a
                  className="custom-text text-center  leading-6 opacity-60 underline inline-flex items-center gap-1"
                  href={currentPlanet.overview.source}
                >
                  Wikipedia{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="hover:fill-red"
                  >
                    <path
                      opacity="0.5"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z"
                      fill="white"
                      className="hover:opacity-100"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Buttons For Desktop and Tablet  */}
            <div className="flex-1 max-w-[281px] lg:w-full flex-col gap-4 hidden md:flex">
              {constant.map((item, i) => (
                <button
                  onClick={(e) => {
                    handleClick(e, i), setActiveButtonIndex(i);
                  }}
                  className={`w-full px-5 h-10 gap-4 inline-flex items-center border`}
                  style={{
                    backgroundColor:
                      activeButtonIndex === i ? colors[planet] : "",
                  }}
                  key={item.id}
                >
                  <span className="text-white opacity-50 font-spartan text-[9px] font-bold leading-6 tracking-[1.929px] uppercase">
                    {item.number}
                  </span>
                  <h3 className="text-white font-spartan text-[9px] font-bold leading-6 tracking-[1.929px] uppercase">
                    {item.title}
                  </h3>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="lg:flex lg:flex-row lg:items-center">
          <div className="w-full flex justify-center mt-24 md:mt-[146px]">
            <div
              className={`z-10  "w-[111px] h-[111px] md:w-[184px] md:h-[184px] lg:w-[450px] lg:h-[450px] relative `}
            >
              <img
                className={`w-full h-full block  `}
                src={data[planet].images.planet}
                alt={`${currentPlanet.name} image`}
              />
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[75px] h-[75px] md:w-[120px] md:h-[120px] md:translate-x-0 md:bottom-0 lg:w-[158px] lg:h-[165px]">
                <img
                  src={currentPlanetImage}
                  alt={`${currentPlanet.name} image`}
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row lg:w-[400px] lg:flex-col gap-24 md:gap-[69px] lg:gap-6 w-full items-center mt-24 md:mt-[146px] lg:mt-20  ">
            <div className="flex flex-col flex-1  items-center md:items-start ">
              <h1 className="heading-m mb-4 ">{currentPlanet.name}</h1>
              <p className="custom-text text-center md:text-start leading-6 opacity-60">
                {currentPlanetInfo}
              </p>
              <div className="flex gap-1 mt-8 ">
                <p className="custom-text text-center leading-6 opacity-60">
                  Source:
                </p>
                <a
                  className="custom-text text-center  leading-6 opacity-60 underline inline-flex items-center gap-1"
                  href={currentPlanet.overview.source}
                >
                  Wikipedia{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="hover:fill-red"
                  >
                    <path
                      opacity="0.5"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z"
                      fill="white"
                      className="hover:opacity-100"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Buttons For Desktop and Tablet  */}
            <div className="flex-1 max-w-[281px] lg:w-full flex-col gap-4 hidden md:flex">
              {constant.map((item, i) => (
                <button
                  onClick={(e) => {
                    handleClick(e, i), setActiveButtonIndex(i);
                  }}
                  className={`w-full px-5 h-10 gap-4 inline-flex items-center border`}
                  style={{
                    backgroundColor:
                      activeButtonIndex === i ? colors[planet] : "",
                  }}
                  key={item.id}
                >
                  <span className="text-white opacity-50 font-spartan text-[9px] font-bold leading-6 tracking-[1.929px] uppercase">
                    {item.number}
                  </span>
                  <h3 className="text-white font-spartan text-[9px] font-bold leading-6 tracking-[1.929px] uppercase">
                    {item.title}
                  </h3>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Planet Info */}
      <div className="flex flex-col gap-2 mt-7 lg:mt-[87px] md:flex-row pb-5  ">
        <div className="w-full h-12 md:h-[88px] border border-[#ffffff40] flex md:flex-col md:items-start md:justify-start items-center justify-between md:py-4 px-6 ">
          <h3 className="text-white leading-4 tracking-[0.727px] text-[12px] font-spartan font-bold opacity-60 uppercase">
            Rotation Time
          </h3>
          <h4 className="info-heading lg:heading-m">
            {currentPlanet.rotation}
          </h4>
        </div>

        <div className="w-full h-12 md:h-[88px] border border-[#ffffff40] flex items-center justify-between  md:flex-col md:items-start md:justify-start px-6  md:py-4 ">
          <h3 className="text-white leading-4 tracking-[0.727px] text-[12px] font-spartan font-bold opacity-60 uppercase">
            Revolution Time
          </h3>
          <h4 className="info-heading lg:heading-m">
            {currentPlanet.revolution}
          </h4>
        </div>

        <div className="w-full h-12 md:h-[88px] border border-[#ffffff40] flex items-center justify-between  md:flex-col md:items-start md:justify-start px-6  md:py-4 ">
          <h3 className="text-white leading-4 tracking-[0.727px] text-[12px] font-spartan font-bold opacity-60 uppercase">
            Radius
          </h3>
          <h4 className="info-heading lg:heading-m">{currentPlanet.radius}</h4>
        </div>

        <div className="w-full h-12 md:h-[88px] border border-[#ffffff40] flex items-center justify-between  md:flex-col md:items-start md:justify-start px-6  md:py-4 ">
          <h3 className="text-white leading-4 tracking-[0.727px] text-[12px] font-spartan font-bold opacity-60 uppercase">
            Average Temp.
          </h3>
          <h4 className="info-heading lg:heading-m">
            {currentPlanet.temperature}
          </h4>
        </div>
      </div>
    </main>
  );
}

export default Main;
