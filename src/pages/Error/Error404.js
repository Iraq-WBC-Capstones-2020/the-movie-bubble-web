import React from 'react';
import './Error404.css';
import Minion from './minion.png';
export default function Error404() {
  return (
    <div className="overflow-hidden">
      <div className="flex justify-around flex-wrap items-center max-h-screen relative">
        <div>
          <h1 className=" error-text text-white text-center">
            4<sppan className="text-orange-gradient">0</sppan>4
          </h1>
          <h2 className="text-6xl text-white text-center">Not Found</h2>
        </div>
        <img src={Minion} className=" absolute minion z-10" alt="minion img" />
        <div className="error-bubble-holder">
          <svg
            className="error-bubble-svg"
            width="50rem"
            height="70rem"
            viewBox="0 0 100% 100%"
            xmlns="http://www.w3.org/2000/svg"
            // style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
          >
            <defs>
              <linearGradient id="linear-orange-gradient" x1="1" x2="0">
                <stop offset=".117" stopColor="#FF7521" />
                <stop offset=".908" stopColor="#FFB421" />
              </linearGradient>
            </defs>
            <g transform="matrix(1,0,0,1,-891,0)">
              <path
                className="error-bubble-path"
                fill="url(#linear-orange-gradient)"
                d="M1920,1080L994.758,1080C928.227,940.178 891,783.83 891,618.852C891,388.529 963.557,175.027 1087.03,0L1920,0L1920,1080Z"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
