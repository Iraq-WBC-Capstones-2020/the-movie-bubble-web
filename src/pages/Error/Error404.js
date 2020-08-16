import React from 'react';
import './Error404.css';
import Minion from './minion.png';
export default function Error404() {
  return (
    <div className="overflow-hidden min-h-screen bg-darkgrey">
      <div className="flex justify-around flex-wrap items-center max-h-screen relative">
        <div>
          <h1 className=" text-15r max-910p:text-10r   text-white text-center">
            4<span className="text-orange-gradient">0</span>4
          </h1>
          <h2 className="text-6xl text-white text-center">Not Found</h2>
        </div>
        <img
          src={Minion}
          className="absolute max-910p:right-auto right-10% max-910p:top-60vh top-auto  w-300p max-910p:w-40% z-10"
          alt="minion img"
        />
        <div className="max-910p:mr-0 -mr-20r max-910p:w-60r w-auto mt-auto max-910p:-mt-10r ">
          <svg
            className="transform rotate-0 mr-10 max-910p:rotate-90 "
            width="50rem"
            height="70rem"
            viewBox="0 0 100% 100%"
            xmlns="http://www.w3.org/2000/svg"
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
