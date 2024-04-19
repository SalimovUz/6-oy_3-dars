import React from "react";
import Stroke from "../images/icons/hero-stroke.svg";
import Zapier from "../images/logos/zapier-logo.svg"
import Spotify from "../images/logos/spotify-logo.svg"
import Zoom from "../images/logos/zoom.svg"
import Amazon from "../images/logos/amazon.svg"
import Adobe from "../images/logos/adobe.svg"
import Notion from "../images/logos/notion.svg"
import Netflix from "../images/logos/netflix.svg"

const HeroMain = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="hero mx-auto mt-20">
          <div className="hero__top flex align-center mx-auto w-1/2 bg-customWhite gap-1 py-3 px-5 box-border border border-gray-200 rounded-lg">
            <img
              className="rounded-md bg-orange-200 px-4 py-3"
              src={Stroke}
              alt="Chaqmoq"
            />
            <h1 className="text-4xl font-semibold leading-150 tracking-normal text-center tracking-1px mx-auto my-auto">
              <span className="text-customOrange">Unlock</span> Your Creative
              Potential
            </h1>
          </div>
          <h2 className=" text-center text-gray-900 font-medium text-3xl leading-1.5 mt-5">
            with Online Design and Development Courses.
          </h2>
          <h3 className=" text-center text-gray-700 text-base font-normal leading-6 mt-2">
            Learn from Industry Experts and Enhance Your Skills.
          </h3>

          <div className="hero__buttons flex mx-auto justify-center mt-12 gap-3">
            <button className="bg-customOrange text-white px-6 py-4 rounded-lg text-base font-semibold">
              Explore Courses
            </button>
            <button className="bg-white text-black px-6 py-4 rounded-lg text-base font-semibold">
              View Pricing
            </button>
          </div>

          <div className="hero__sponsors flex justify-center p-5 box-border border border-gray-200 rounded-lg bg-white mt-20 mb-20 w-4/5 mx-auto">
            <img className="py-5 px-8 w-[140px] h-[60px]" src={Zapier} alt="" />
            <img className="py-5 px-8 w-[140px] h-[60px]" src={Spotify} alt="" />
            <img className="py-5 px-8 w-[140px] h-[60px]" src={Zoom} alt="" />
            <img className="py-5 px-8 w-[140px] h-[60px]" src={Amazon} alt="" />
            <img className="py-5 px-8 w-[140px] h-[60px]" src={Adobe} alt="" />
            <img className="py-5 px-8 w-[140px] h-[60px]" src={Notion} alt="" />
            <img className="py-5 px-8 w-[140px] h-[60px]" src={Netflix} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
