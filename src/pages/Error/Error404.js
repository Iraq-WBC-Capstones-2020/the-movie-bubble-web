import React from 'react';
import './Error404.css';
import Minion from './minion.png';
export default function Error404() {
  return (
    <div className="overflow-hidden min-h-screen bg-darkgrey">
      <div className="flex justify-around flex-wrap items-center max-h-screen relative">
        <div>
          <div className="w-full text-2xl text-black absolute">
            <p className="error-p1 text-center  font-sans font-bold lg:text-3xl md:text-xl sm:text-xs overflow-auto">
              Error<span className="text-orange-600 text-3xl"> 404</span> Page
              Not Found
              <br></br> “Oops! Something is broken.”
            </p>

            <p className="py-2 -mx-48 lg:text-xl md:text-xl sm:text-xs overflow-hidden lg:max-w-3xl md:max-w-2xl sm:max-w-xs">
              Troubleshooting <br></br>
              Here are a few things to try:
            </p>
            <ul className="-mx-48 list-decimal lg:text-xl md:text-xl sm:text-xs  lg:max-w-3xl md:max-w-xs sm:max-w-xs ">
              <li>Reload page or even restart your browser</li>
              <li>Test your net connection (No internet connection)</li>
              <li>
                Make sure your security software isn't blocking Movie bubble
                website
              </li>
            </ul>

            <p className="text-2xl my-12 font-sans font-bold">
              Go back to
              <a className="text-orange-600" href="#">
                Home Page
              </a>
            </p>
          </div>
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
