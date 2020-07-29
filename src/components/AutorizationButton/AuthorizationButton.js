import React from 'react';
import './AuthorizationButton.css';
import faceBookLogo from './Shape.png';
import googleLogo from './Group.png';
export default function AuthorizationButton() {
  return (
    <div className="authorizationButtonContainer">
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
          <img src={faceBookLogo} alt="facebook logo"></img>
        </button>
        <button className="google">
          <img src={googleLogo}></img>
        </button>
      </div>
    </div>
  );
}
