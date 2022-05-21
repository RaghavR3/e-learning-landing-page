import React from "react";

const PhotographyBox = () => {
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
                d="m31 18 1.83 2H36c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H20c-1.1 0-2-.9-2-2V22c0-1.1.9-2 2-2h3.17L25 18h6Zm-3 5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Zm0 1.8a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4Z"
                id="c"
              />
            </defs>
            <g fill="none" fill-rule="evenodd">
              <circle fill="url(#a)" cx="28" cy="28" r="28" />
              <use fill="#FFF" xlinkHref="#c" />
            </g>
          </svg>
        </div>
        <div
          className="p-10 bg-slate-200 -mt-6 rounded-2xl shadow-md lg:px-8"
          id="box"
        >
          <h2 className="text-2xl font-bold text-default-blue">Photography</h2>
          <p className="py-4 text-default-gray lg:h-44 lg:py-6">
            Explore critical fundamentals like lighting, composition, and focus
            to capture exceptional photos.
          </p>
          <a href="#a" className="text-default-pink">
            Get Started
          </a>
        </div>
      </div>
    </>
  );
};

export default PhotographyBox;
