import React from 'react';
import './errorpage.css';
import Errorimg from './errorpage.png';

function errorPage() {
  return (
    <>
      <div className="errorPage max-w-full relative">
        <div className="m-0 p-0 ">
          <img src={Errorimg}></img>{' '}
        </div>
        <div className="title absolute">
          <p className="text-center  font-sans font-bold lg:text-3xl md:text-xl sm:text-xs overflow-auto">
            {' '}
            Error<span> 404</span> Page Not Found
            <br></br> “Oops! Something is broken.”
          </p>

          <p className="errorPage-trouble lg:text-xl md:text-xl sm:text-xs overflow-hidden lg:max-w-3xl md:max-w-2xl sm:max-w-xs">
            Troubleshooting <br></br>
            Here are a few things to try:
          </p>
          <ul className="lg:text-xl md:text-xl sm:text-xs  lg:max-w-3xl md:max-w-xs sm:max-w-xs overflow-x-visible">
            <li>Reload page or even restart your browser</li>
            <li>Test your net connection (No internet connection)</li>
            <li>
              Make sure your security software isn't blocking Movie bubble
              website
            </li>
          </ul>

          <div className="relative">
            <div className="bubble-home-text absolute">
              <p className="text-2xl font-sans font-bold">
                Go back to <a href="#">Home Page</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default errorPage;
