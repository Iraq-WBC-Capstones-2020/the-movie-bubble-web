import React from 'react';
import './AuthorizationButton.css';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
export default function AuthorizationButton() {
  return (
    <div className="joinUsWrapper">
      <div className="joinUsWrapper__registerLoginWrapper">
        <button className="login">
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
        continueWithWrapper
        "
      >
        <div className="continueWith">
          <div>
            <h3 className="continueWithText">Continue With</h3>
          </div>
        </div>

        <button className="faceBook">
          <FaFacebookF className="faceBool__logo"></FaFacebookF>
        </button>
        <button className="google">
          <FcGoogle className="google__logo"></FcGoogle>
        </button>
      </div>
    </div>
  );
}
