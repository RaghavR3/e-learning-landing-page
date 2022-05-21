import React from "react";

const BusinessBox = () => {
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
                d="M35 22h-2c0-2.76-2.24-5-5-5s-5 2.24-5 5h-2c-1.1 0-1.99.9-1.99 2L19 36c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V24c0-1.1-.9-2-2-2Zm-7-3c1.66 0 3 1.34 3 3h-6c0-1.66 1.34-3 3-3Zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5Z"
                id="e"
              />
            </defs>
            <g fill="none" fill-rule="evenodd">
              <circle fill="url(#a)" cx="28" cy="28" r="28" />
              <use fill="#FFF" xlinkHref="#e" />
            </g>
          </svg>
        </div>
        <div
          className="p-10 bg-slate-200 -mt-6 rounded-2xl shadow-md lg:px-8"
          id="box"
        >
          <h2 className="text-2xl font-bold text-default-blue">Business</h2>
          <p className="py-4 text-default-gray lg:h-44 lg:py-6">
            A step-by-step playbook to help you start, scale, and sustain your
            business without outside investment.
          </p>
          <a href="#a" className="text-default-pink">
            Get Started
          </a>
        </div>
      </div>
    </>
  );
};

export default BusinessBox;
