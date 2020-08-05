import React from 'react';
import Input from '../Input/Input';
import clossButton from '../../assets/icons/icon-close-orange.png';
export default function LoginForm() {
  return (
    <div className="FormWrapper">
      <div className="clossButton ">
        <img src={clossButton} alt="clossButton" />
      </div>
      <form className="FormWrapper__Form">
        <div className=" w-2/3 ">
          <Input
            type="text"
            placeholder="Username/Email"
            id="username-email"
          ></Input>
        </div>
        <div className=" w-2/3">
          <Input type="password" placeholder="Password" id="L-password"></Input>
        </div>

        <div className="rememberme my-5  w-2/3">
          <input
            type="checkbox"
            className="inline mr-3"
            id="rememberme"
            name="rememberme"
          />
          <label htmlFor="rememberme" className="text-white text-sm">
            Remember me
          </label>
        </div>
        <div className="loginFormWrapper__loginForm__rememberForgetWeapper  flex flex-col items-center w-2/3 ">
          <div className=" w-2/3">
            <span className="underline text-white cursor-pointer">
              Forget Password
            </span>
          </div>

          <div className="w-2/3">
            <button className="button text-white my-5 " type="submit">
              Sign in
            </button>
          </div>
        </div>
        <div className="loginFormWrapper__loginForm__notAMember flex flex-col w-2/3 justify-center items-center">
          <span className="text-white mr-4 ">Not a member yet?</span>
          <span className="text-white underline cursor-pointer">
            Register Now{' '}
          </span>
        </div>
      </form>
    </div>
  );
}
