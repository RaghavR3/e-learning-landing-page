import React, { Component } from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center mt-20 p-10 bg-default-blue lg:px-40">
        <h2 className="text-xl font-bold text-white lg:text-4xl">skilled</h2>
        <button className="text-base font-bold text-white bg-gradient-to-b from-gradient-blue to-gradient-purple py-3 px-8 rounded-full">
          Get Started
        </button>
      </div>
    </>
  );
};

export default Footer;
