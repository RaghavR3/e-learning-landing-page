import React from "react";

const CryptoBox = () => {
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
                d="M26 28c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm-4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z"
                id="d"
              />
            </defs>
            <g fill="none" fill-rule="evenodd">
              <circle fill="url(#a)" cx="28" cy="28" r="28" />
              <use fill="#FFF" xlinkHref="#d" />
            </g>
          </svg>
        </div>
        <div
          className="p-10 bg-slate-200 -mt-6 rounded-2xl shadow-md lg:px-8"
          id="box"
        >
          <h2 className="text-2xl font-bold text-default-blue">Crypto</h2>
          <p className="py-4 text-default-gray lg:h-44 lg:py-6">
            All you need to know to get started investing in crypto. Go from
            beginner to advanced with this 54 hour course.
          </p>
          <a href="#a" className="text-default-pink">
            Get Started
          </a>
        </div>
      </div>
    </>
  );
};

export default CryptoBox;
