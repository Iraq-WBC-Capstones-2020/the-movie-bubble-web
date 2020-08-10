import React from 'react';
import PropTypes from 'prop-types';
export default function Answers({ answers, className }) {
  console.log(className);
  return (
    <button
      className={`rounded-lg p-0.08 w-1/3 focus:outline-none md:w-64 lg:w-64 h-10 flex justify-center sm:w-5/6 xs:w-5/6 items-center xl:w-64 
       ${className}`}
      style={{
        background: 'linear-gradient(270deg, #FF7521 11.7%, #FFB421 90.81%)',
      }}
    >
      <div className="h-full w-full bg-darkgray rounded-lg flex items-center justify-center">
        <span className="text-white">{answers}</span>
      </div>
    </button>
  );
}
Answers.prototype = {
  answers: PropTypes.string.isRequired,
  className: PropTypes.string,
};
