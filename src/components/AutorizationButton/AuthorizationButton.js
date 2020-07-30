import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
export default function AuthorizationButton() {
  return (
    <>
      <div className="joinUsWrapper">
        <div className="joinUsWrapper__registerLoginWrapper">
          <button className="joinUsWrapper__registerLoginWrapper__login">
            <h3>Login</h3>
          </button>

          <button
            className="
        joinUsWrapper__registerLoginWrapper__register 
        "
          >
            <h3>Register</h3>
          </button>
        </div>
        <div
          className="
        joinUsWrapper__continueWithWrapper
        "
        >
          <div className="joinUsWrapper__continueWithWrapper__continueWith">
            <div>
              <h3 className="continueWithText">Continue With</h3>
            </div>
          </div>

          <button className="joinUsWrapper__faceBook">
            <FaFacebookF className="joinUsWrapper__faceBook__faceBook__logo"></FaFacebookF>
          </button>
          <button className="joinUsWrapper__google">
            <FcGoogle className="joinUsWrapper__google__google__logo"></FcGoogle>
          </button>
        </div>
      </div>
    </>
  );
}
