import React from "react";

import HeaderBox from "./header-box";

import AnimationBox from "./information-box/Animation";
import DesignBox from "./information-box/Design";
import PhotographyBox from "./information-box/Photography";
import CryptoBox from "./information-box/Crypto";
import BusinessBox from "./information-box/Business";

const Courses = () => {
  return (
    <>
      <div className="flex flex-col lg:grid lg:grid-rows-2 lg:grid-cols-3 lg:gap-10">
        <HeaderBox></HeaderBox>
        <AnimationBox></AnimationBox>
        <DesignBox></DesignBox>
        <PhotographyBox></PhotographyBox>
        <CryptoBox></CryptoBox>
        <BusinessBox></BusinessBox>
      </div>
    </>
  );
};

export default Courses;
