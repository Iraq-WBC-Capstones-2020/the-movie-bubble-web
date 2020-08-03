import React from 'react';
import Input from '../Input/Input';
import clossButton from '../../../images/Form-closing-button.png';

export default function RegisterForm() {
  return (
    <div className="FormWrapper">
      <div className="clossButton top-0 left-0 absolutec">
        <img src={clossButton} alt="clossButton" />
      </div>
      <form className="FormWrapper__Form  w-full">
        <div className="registerForm__name flex w-2/3 ">
          <div className="firstnameWapper  w-1/3  ">
            <Input type="text" placeHolder="firstname"></Input>
          </div>
          <div className="lastnameWrapper  w-1/3  ml-12">
            <Input type="text" placeHolder="lastname" className="mx-5"></Input>
          </div>
        </div>
        <div className=" w-2/3 ">
          <Input type="text" placeHolder="username"></Input>
        </div>
        <div className=" w-2/3 ">
          <Input type="text" placeHolder="Email"></Input>
        </div>
        <div className=" w-2/3 ">
          <Input type="password" placeHolder="password"></Input>
        </div>
        <div className=" w-2/3 ">
          <Input type="password" placeHolder="confirm password"></Input>
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
          <button
            type="submit"
            className="button text-white px-3 py-2 my-5 mx-24"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
