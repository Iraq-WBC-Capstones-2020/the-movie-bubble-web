import React, { useState } from 'react';
import BubbleButton from '../components/BubbleButton';
import AuthorizationButton from '../components/AuthorizationButton';
import SlideCards from '../components/Sliders/Sliders';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
export default function Home() {
  const [authen, setAuthen] = useState(true);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  return (
    <div className="absolute bottom-0 h-full w-full bg-darkgray overflow-hidden">
      <div className="relative flex justify-center h-full w-full mt-24">
        <div className="lg:w-3/5 w-0">
          <SlideCards />
          <div className=" absolute lg:ml-64 mx-auto inset-x-0 bottom-0 hidden z-0 md:z-40 md:block w-64 h-64  transform scale-150">
            <BubbleButton />
          </div>
        </div>

        <div className=" lg:w-1/2 w-10/12 flex justify-center">
          <AuthorizationButton />
        </div>
      </div>{' '}
    </div>
  );
}
