import React from 'react';
import Input from '../Input/Input';
import clossButton from '../../../images/Form-closing-button.png';
export default function LoginForm() {
  return (
    <div className="FormWrapper  relative">
      <div className="clossButton top-0 left-0 absolutec">
        <img src={clossButton} alt="clossButton" />
      </div>
      <form className="FormWrapper__Form w-full">
        <div className=" w-2/3 ">
          <Input type="text" placeHolder="Username/Email"></Input>
        </div>
        <div className=" w-2/3">
          <Input type="password" placeHolder="password"></Input>
        </div>
        <div className="loginFormWrapper__loginForm__rememberForgetWeapper  flex flex-col justify-between items-center w-2/3 ">
          <div className="rememberme my-5  w-1/3">
            <input
              type="checkbox"
              className="inline mr-3"
              id="rememberMe"
              name="rememberme"
            />
            <label htmlFor="rememberme" className="text-white text-sm">
              Remember me
            </label>
          </div>
          <div className=" w-2/3">
            <span className="underline text-white cursor-pointer ml-8">
              Forget Password
            </span>
          </div>
        </div>
        <div className="w-2/3">
          <button
            className="button text-white px-3 py-2 my-5 ml-24"
            type="submit"
          >
            Sign in
          </button>
        </div>
        <div className="loginFormWrapper__loginForm__notAMember flex flex-col w-2/3 justify-center items-center">
          <span className="text-white mr-4 ">Not a member yet</span>
          <span className="text-white underline cursor-pointer">
            Register here{' '}
          </span>
        </div>
      </form>
    </div>
  );
}
