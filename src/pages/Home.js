import React from 'react';
import BubbleButton from '../components/BubbleButton';
import AuthorizationButton from '../components/AuthorizationButton';
import SlideCards from '../components/Sliders/Sliders';
export default function Home() {
  return (
    <div className="absolute h-full w-full bg-darkgray overflow-hidden">
      <div className="relative flex  justify-around h-full">
        <div className="lg:w-1/2 w-0 ml-0  md:mr-40">
          <SlideCards />
          <div className=" absolute   lg:ml-64 mx-auto inset-x-0 bottom-0 hidden z-0 md:z-40 md:block w-64 h-64  transform scale-150">
            <BubbleButton />
          </div>
        </div>

        <div className=" lg:w-1/2 w-10/12 ">
          <AuthorizationButton />
        </div>
      </div>{' '}
    </div>
  );
}
