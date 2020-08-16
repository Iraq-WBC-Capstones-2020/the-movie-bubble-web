import React from 'react';
import Input from './Input';
import clossButton from './../assets/icons/icon-close-orange.png';
export default function LoginForm() {
  return (
    <div className="FormWrapper">
      <button className="clossButton focus:outline-none">
        <img src={clossButton} alt="clossButton" />
      </button>
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
            className="inline mr-3 rounded"
            id="rememberme"
            name="rememberme"
          />
          <label htmlFor="rememberme" className="text-white text-sm">
            Remember me
          </label>
        </div>
        <div className="md:flex-row md:justify-between sm:justify-start  flex flex-col w-2/3 ">
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
        <div className="md:flex-row lg:flex-row xl:flex-row flex flex-col w-2/3 justify-start items-start">
          <span className="text-white mr-4 ">Not a member yet?</span>
          <span className="text-white underline cursor-pointer">
            Register Now
          </span>
        </div>
      </form>
    </div>
  );
}