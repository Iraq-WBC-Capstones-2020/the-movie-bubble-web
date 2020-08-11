import React from 'react';
import Input from './Input';
import clossButton from './../assets/icons/icon-close-orange.png';

export default function RegisterForm() {
  return (
    <div className="FormWrapper ">
      <div className="clossButton">
        <img src={clossButton} alt="clossButton" />
      </div>
      <form className="FormWrapper__Form">
        <div className="flex w-2/3 sm:flex-col sm:justify-start ">
          <div className="firstnameWapper  w-2/3 sm:w-full ">
            <Input type="text" placeholder="Firstname" id="firstname"></Input>
          </div>
          <div className="lastnameWrapper  w-2/3 sm:w-full  ml-12 sm:ml-0">
            <Input type="text" placeholder="Lastname" id="lastname"></Input>
          </div>
        </div>
        <div className=" w-2/3 ">
          <Input type="text" placeholder="Username" id="username"></Input>
        </div>
        <div className=" w-2/3 ">
          <Input type="email" placeholder="Email" id="Email"></Input>
        </div>
        <div className=" w-2/3 ">
          <Input type="password" placeholder="Password" id="R-password"></Input>
        </div>
        <div className=" w-2/3 ">
          <Input
            type="password"
            placeholder="Confirm password"
            id="confirm password"
          ></Input>
        </div>
        <div className="privacyPolicy my-5 w-2/3  ">
          <input
            type="checkbox"
            className="inline mr-3"
            id="privacyPolicy"
            name="privacyPolicy"
          />
          <label htmlFor="privacyPolicy" className="text-white text-sm">
            I agree to your privacy policy
          </label>
        </div>
        <div className=" w-2/3 flex flex-col justify-center items-start">
          <button type="submit" className="button text-white my-5">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
