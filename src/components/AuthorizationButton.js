import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import PropTypes from 'prop-types';
export default function AuthorizationButton({
  authentication,
  login,
  register,
}) {
  const visibeLogin = () => {
    login(true);
    authentication(false);
  };
  const visibeRegister = () => {
    register(true);
    authentication(false);
  };
  return (
    <>
      <div
        className="absolute lg:mr-10  lg:mt-64 mt-20 sm:ml-10 flex flex-col  bg-darkgray "
        style={{ display: authentication }}
      >
        <div className="flex">
          <button
            onClick={() => visibeLogin()}
            style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' }}
            className="transform hover:scale-110 transition duration-1000 rounded-r-none rounded-lg flex items-center justify-center w-32 h-16 border-none main-gradient"
          >
            <h3 className="text-2xl text-white">Login</h3>
          </button>

          <button
            onClick={() => visibeRegister()}
            style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
            className="transform hover:scale-110 transition duration-1000 rounded-l-none rounded-lg -mx-5 flex items-center justify-center w-32 h-16 border-none main-gradient"
          >
            <h3 className="text-2xl text-white ">Register</h3>
          </button>
        </div>
        <div className="flex">
          <div className="h-16 w-32 continueWithClipPath mt-4 p-0.08 main-gradient rounded-lg rounded-tr-none">
            <div className="bg-darkgray pr-5 continueWithClipPath h-full rounded-lg rounded-tr-none flex justify-center items-center text-white text-sm">
              <h3>Continue With</h3>
            </div>
          </div>
          <button
            style={{ clipPath: ' polygon(37% 0, 100% 0%, 63% 100%, 0% 100%)' }}
            className="transform hover:scale-110 transition duration-1000 flex items-center justify-center h-16 w-20 bg-lightblue mt-4 -ml-8 facebookClipPath "
          >
            <FaFacebookF
              style={{
                clipPath: 'polygon(37% 0, 100% 0%, 63% 100%, 0% 100%)',
              }}
              className="w-6 h-6 text-white"
            ></FaFacebookF>
          </button>
          <button
            style={{ clipPath: 'polygon(37% 0, 100% 0%, 100% 100%, 0% 100%)' }}
            className="transform hover:scale-110 transition duration-1000 googleClipPath pl-3 flex items-center justify-center h-16 w-20 mt-4 -ml-8 bg-white rounded-lg rounded-l-none"
          >
            <FcGoogle className="w-6 h-6"></FcGoogle>
          </button>
        </div>
      </div>
    </>
  );
}
AuthorizationButton.propTypes = {
  login: PropTypes.func,
  register: PropTypes.func,
  authentication: PropTypes.func,
};
