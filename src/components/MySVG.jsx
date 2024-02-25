import React from "react";
import homeImg from "../images/home-image.png";

function MySVG() {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="#0088b3" offset="0%"></stop>
          <stop id="stop2" stopColor="#0ef" offset="100%"></stop>
        </linearGradient>
      </defs>
      <mask id="mask1" mask-type="alpha">
        <path
          fill="url(#sw-gradient)"
          d="M23.2,-27.6C28.3,-23.5,29.3,-14.4,30.6,-5.6C31.9,3.2,33.5,11.7,30.7,18.9C28,26.2,20.9,32.1,12.6,35.6C4.2,39,-5.4,40.1,-12.6,36.6C-19.9,33.2,-24.8,25.1,-29.1,17.1C-33.3,9,-37,0.9,-35.5,-6C-33.9,-12.9,-27.2,-18.6,-20.4,-22.5C-13.6,-26.4,-6.8,-28.4,1.1,-29.7C9.1,-31.1,18.2,-31.8,23.2,-27.6Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          stroke-width="0"
          style={{transition: 'all 0.3s ease 0s;'}}
        ></path>
      </mask>
      <g mask="url(#mask)1">
        <path
          fill="url(#sw-gradient)"
          d="M23.2,-27.6C28.3,-23.5,29.3,-14.4,30.6,-5.6C31.9,3.2,33.5,11.7,30.7,18.9C28,26.2,20.9,32.1,12.6,35.6C4.2,39,-5.4,40.1,-12.6,36.6C-19.9,33.2,-24.8,25.1,-29.1,17.1C-33.3,9,-37,0.9,-35.5,-6C-33.9,-12.9,-27.2,-18.6,-20.4,-22.5C-13.6,-26.4,-6.8,-28.4,1.1,-29.7C9.1,-31.1,18.2,-31.8,23.2,-27.6Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          stroke-width="0"
          style={{transition: 'all 0.3s ease 0s;'}}
        ></path>
        <image href={homeImg} x="20" y="22" className="home-image" alt="home" />
      </g>
    </svg>
  );
}

export default MySVG;
