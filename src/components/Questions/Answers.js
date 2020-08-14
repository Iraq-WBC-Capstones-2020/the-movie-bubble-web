import React from 'react';
import PropTypes from 'prop-types';
function Answers({ answer, className, image }) {
  if (image)
    return (
      <button
        className={`transform main-gradient hover:scale-105 rounded-lg p-0.08 w-1/3 focus:outline-none md:w-64 lg:w-64 h-10 flex justify-center sm:w-5/6 xs:w-5/6 items-center xl:w-64 
       ${className}`}
      >
        <div className="h-full w-full bg-darkgray rounded-lg flex items-center justify-center">
          <img src={answer} alt="answer" className="text-white"></img>
        </div>
      </button>
    );
  else
    return (
      <button
        className={`transform main-gradient hover:scale-105 rounded-lg p-0.08 w-1/3 focus:outline-none md:w-64 lg:w-64 h-10 flex justify-center sm:w-5/6 xs:w-5/6 items-center xl:w-64 
       ${className}`}
      >
        <div className="h-full w-full bg-darkgray rounded-lg flex items-center justify-center">
          <span className="text-white">{answer}</span>
        </div>
      </button>
    );
}
Answers.propTypes = {
  answer: PropTypes.string.isRequired,
  image: PropTypes.bool.isRequired,
  className: PropTypes.string,
};
export default Answers;
