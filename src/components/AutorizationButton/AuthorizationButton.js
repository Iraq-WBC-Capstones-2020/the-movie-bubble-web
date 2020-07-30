import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
export default function AuthorizationButton() {
  return (
    <>
      {/* this div wrap the whole component */}
      <div className="joinUsWrapper">
        {/* this div wrap register and login button*/}
        <div className="joinUsWrapper__registerLoginWrapper">
          <button
            className="
            joinUsWrapper__registerLoginWrapper__login
            login-registerButton
            "
          >
            <h3>Login</h3>
          </button>

          <button
            className="
            joinUsWrapper__registerLoginWrapper__register 
            login-registerButton
            "
          >
            <h3>Register</h3>
          </button>
        </div>
        {/* this div wrap continue with button and divs*/}
        <div
          className="
          joinUsWrapper__continueWithWrapper
          "
        >
          {/* this div is for continue with part*/}
          <div
            className="
            joinUsWrapper__continueWithWrapper__continueWith
            "
          >
            {/* this div contain the text and show linearw boarder*/}
            <div>
              <h3>Continue With</h3>
            </div>
          </div>
          {/* facebook button */}
          <button
            className="
            joinUsWrapper__facebook
            facebook-google
            "
          >
            {/* facebook logo */}
            <FaFacebookF
              className="
              joinUsWrapper__facebook__facebook__logo
              "
            ></FaFacebookF>
          </button>
          {/* google button  */}
          <button
            className="
            joinUsWrapper__google
            facebook-google
            "
          >
            {/* google logo */}
            <FcGoogle
              className="
              joinUsWrapper__google__google__logo
              "
            ></FcGoogle>
          </button>
        </div>
      </div>
    </>
  );
}
