import React, { Component } from "react";
import MobileImage from "./mobile";
import DesktopImage from "./Desktop";

const Hero = () => {
  return (
    <>
      <div
        className="flex flex-col lg:flex-row pt-10 lg:py-20"
        id="hero_container"
      >
        <div
          className="flex flex-col lg:justify-center lg:w-11/12"
          id="hero_left_column"
        >
          <h1 className="font-bold text-5xl lg:text-6xl text-default-blue">
            Maximize skill, minimize budget
          </h1>
          <p className="py-7 text-default-gray text-base lg:text-lg lg:w-5/6 lg:py-10">
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </p>
          <button className="w-44 px-9 py-4 rounded-full text-white font-bold bg-gradient-to-t from-gradient-orange to-gradient-pink">
            Get Started
          </button>
        </div>
        <div
          className="flex flex-col py-11 lg:py-0 visible lg:hidden lg:w-1/12"
          id="hero_right_column"
        >
          <MobileImage></MobileImage>
        </div>
        <div
          className="hidden lg:flex lg:flex-col lg:py-0 lg:visible lg:-mr-[28rem] lg:-mt-[18rem]"
          id="hero_right_column"
        >
          <DesktopImage></DesktopImage>
        </div>
      </div>
    </>
  );
};

export default Hero;
