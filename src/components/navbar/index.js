import React, { Component } from "react";

const NavBar = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-xl lg:text-4xl font-bold">skilled</h2>
        <button className="text-base font-bold text-white bg-default-blue py-3 px-8 rounded-full">
          Get Started
        </button>
      </div>
    </>
  );
};

export default NavBar;
