import React from 'react';
import './AuthorizationButton.css';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
export default function AuthorizationButton() {
  return (
    <div className="wrapper">
      <div className="registerLoginContainer">
        <button className="login">
          <h3>Login</h3>
        </button>

        <button className="register">
          <h3>Register</h3>
        </button>
      </div>
      <div className="continueWithContainer">
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
