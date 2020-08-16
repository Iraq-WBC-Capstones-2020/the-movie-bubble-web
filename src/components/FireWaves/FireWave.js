import React from 'react';
import './FireWave.css';
export default function FireWave() {
  return (
    <div>
      <div className="absolute d-flex justify-center align-center bottom-0 w-full">
        <svg
          className="absolute  bottom-0 w-full sm:h-20r"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <defs>
            <linearGradient id="linear-orange-gradient" x1="1" x2="0">
              <stop offset=".117" stopColor="#FF7521" />
              <stop offset=".908" stopColor="#FFB421" />
            </linearGradient>
          </defs>
          <path
            className=" fire-wave transform sm:scale-y-300   "
            fill="url(#linear-orange-gradient)"
            d="M0,64L60,64C120,64,240,64,360,90.7C480,117,600,171,720,176C840,181,960,139,1080,117.3C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
