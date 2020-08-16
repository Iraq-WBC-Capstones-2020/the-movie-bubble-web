import React from 'react';
import QuestionImage from './../../assets/icons/QuestionImages.svg';
import Answers from './../Answers/Answers';
function Questions() {
  return (
    <div className="flex flex-col bg-darkgray w-full justify-center items-center">
      <div className="imgWrapper flex ">
        <img src={QuestionImage} alt="question" className="flex" />
      </div>
      <div className="flex content-center text-white p-5">
        <span className="sm:text-2xl md:text-2xl text-3xl md:px-24 xs:text-xl lg:px-32 xl:px-48 text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum nihil?
        </span>
      </div>
      <div className="w-full flex justify-center flex-wrap xl:flex-col xl:items-center">
        <div className="w-2/3 xl:w-1/2 flex flex-col  items-center md:justify-between md:flex-row lg:justify-between lg:flex-row xl:justify-between xl:flex-row mt-5">
          <Answers answers="Answer 1" className="md:mr-5" />
          <Answers answers="Answer 2" className="xs:mt-5 sm:mt-5 md:ml-5" />
        </div>
        <div className="w-2/3 xl:w-1/2 flex flex-col  items-center md:justify-between md:flex-row lg:justify-between lg:flex-row xl:justify-between xl:flex-row mt-5">
          <Answers answers="Answer 3" className="md:mr-5" />
          <Answers answers="Answer 4" className="xs:mt-5 md:ml-5 sm:mt-5" />
        </div>
      </div>
    </div>
  );
}
Questions.prototype = {
  questionindex: PropTypes.object.isRequired,
  result: PropTypes.func.isRequired,
};

export default Questions;
