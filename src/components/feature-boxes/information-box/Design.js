import React from "react";

const DesignBox = () => {
  return (
    <>
      <div>
        <div className="pt-10 ml-6 z-10 lg:pt-0" id="image">
          <svg
            width="56"
            height="56"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
                <stop stop-color="#FF6F48" offset="0%" />
                <stop stop-color="#F02AA6" offset="100%" />
              </linearGradient>
              <path
                d="M16 0H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2Zm0 16L9 8v8H2l7-8V2h7v14Z"
                id="b"
              />
            </defs>
            <g fill="none" fill-rule="evenodd">
              <circle fill="url(#a)" cx="28" cy="28" r="28" />
              <use fill="#FFF" xlinkHref="#b" transform="translate(19 19)" />
            </g>
          </svg>
        </div>
        <div
          className="p-10 bg-slate-200 -mt-6 rounded-2xl shadow-md lg:px-8"
          id="box"
        >
          <h2 className="text-2xl font-bold text-default-blue">Design</h2>
          <p className="py-4 text-default-gray lg:h-44 lg:py-6">
            Create beautiful, usable interfaces to help shape the future of how
            the web looks.
          </p>
          <a href="#a" className="text-default-pink">
            Get Started
          </a>
        </div>
      </div>
    </>
  );
};

export default DesignBox;
