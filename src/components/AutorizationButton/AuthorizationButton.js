import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
export default function AuthorizationButton() {
  return (
    <>
      <div className="flex flex-col bg-darkgray ">
        <div className="flex">
          <button className="transform hover:scale-110 transition duration-1000 loginClipPath rounded-r-none rounded-lg flex items-center justify-center w-32 h-16 border-none main-gradient">
            <h3 className="text-2xl text-white">Login</h3>
          </button>

          <button className="transform hover:scale-110 transition duration-1000 registerClipPath rounded-l-none rounded-lg -mx-5 flex items-center justify-center w-32 h-16 border-none main-gradient">
            <h3 className="text-2xl text-white ">Register</h3>
          </button>
        </div>
        <div className="flex">
          <div className="h-16 w-32 continueWithClipPath mt-4 p-0.08 main-gradient rounded-lg rounded-tr-none">
            <div className="bg-darkgray continueWithClipPath h-full rounded-lg rounded-tr-none flex justify-center items-center text-white text-sm">
              <h3>Continue With</h3>
            </div>
          </div>
          <button className="transform hover:scale-110 transition duration-1000 flex items-center justify-center h-16 w-20 bg-lightblue mt-4 -ml-8 facebookClipPath ">
            <FaFacebookF className="w-6 h-6 text-white"></FaFacebookF>
          </button>
          <button className="transform hover:scale-110 transition duration-1000 googleClipPath pl-3 flex items-center justify-center h-16 w-20 mt-4 -ml-8 bg-white rounded-lg rounded-l-none">
            <FcGoogle className="w-6 h-6"></FcGoogle>
          </button>
        </div>
      </div>
    </>
  );
}
