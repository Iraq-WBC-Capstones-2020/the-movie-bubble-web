import React from 'react';
import camerLogo from './camerLogo.svg';
import './Logo.css';
export default function Logo() {
  return (
    <>
      <div className="flex justify-start align-center">
        <div className="w-20 z-0">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="linear-orange-gradient" x1="1" x2="0">
                <stop offset=".117" stopColor="#FF7521" />
                <stop offset=".908" stopColor="#FFB421" />
              </linearGradient>
            </defs>
            <path
              className="logo-bubble"
              fill="url(#linear-orange-gradient)"
              d="M36.5,-51.8C47.6,-42.1,57.3,-31.9,62.1,-19.6C66.8,-7.3,66.8,7.2,63.3,21.4C59.8,35.5,52.8,49.4,41.7,58.8C30.6,68.3,15.3,73.5,0.8,72.4C-13.8,71.3,-27.5,64.1,-41.6,55.5C-55.7,47,-70,37.2,-74.7,24C-79.5,10.8,-74.5,-5.9,-68.6,-21.7C-62.7,-37.6,-55.9,-52.6,-44.3,-62.1C-32.7,-71.7,-16.4,-75.8,-1.8,-73.3C12.7,-70.7,25.3,-61.5,36.5,-51.8Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <img src={camerLogo} alt="Logo" className="w-8 absolute z-10 m-6" />
        <div className="flex items-center text-2xl sm:text-xl font-bold">
          {' '}
          <span style={{ color: '#ED6F18' }}> The&nbsp;</span>{' '}
          <span style={{ color: '#F4A564' }}>Movie&nbsp;</span>{' '}
          <span style={{ color: '#FDEDE0' }}>Bubble </span>
        </div>
      </div>
    </>
  );
}
