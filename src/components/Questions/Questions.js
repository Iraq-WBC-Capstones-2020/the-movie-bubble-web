import React from 'react';
import Answers from './Answers';
import PropTypes from 'prop-types';
function Questions({ question }) {
  return (
    <div className="flex flex-col bg-darkgray w-full justify-center items-center">
      <div className="imgWrapper flex ">
        <img src={question.image} alt="question" className="flex" />
      </div>
      <div className="flex content-center text-white p-5">
        <span className="sm:text-2xl md:text-2xl text-3xl md:px-24 xs:text-xl lg:px-32 xl:px-48 text-center">
          {question.question}
        </span>
      </div>
      <div className="w-full flex justify-center flex-wrap xl:flex-col xl:items-center">
        {question.includeImage && (
          <>
            <div className="w-2/3 xl:w-1/2 flex flex-col  items-center md:justify-between md:flex-row lg:justify-between lg:flex-row xl:justify-between xl:flex-row mt-5">
              <Answers
                answer={question.answer[0].ans}
                image={true}
                className=" h-56 md:mr-5"
              />
              <Answers
                answer={question.answer[1].ans}
                image={true}
                className="  h-56 xs:mt-5 sm:mt-5 md:ml-5"
              />
            </div>
          </>
        )}
      </div>
      {!question.includeImage && (
        <>
          <div className="w-2/3 xl:w-1/2 flex flex-col  items-center md:justify-between md:flex-row lg:justify-between lg:flex-row xl:justify-between xl:flex-row mt-5">
            <Answers
              answer={question.answer[0].ans}
              image={false}
              className="md:mr-5"
            />
            <Answers
              answer={question.answer[1].ans}
              image={false}
              className="xs:mt-5 sm:mt-5 md:ml-5"
            />
          </div>
          <div className="w-2/3 xl:w-1/2 flex flex-col  items-center md:justify-between md:flex-row lg:justify-between lg:flex-row xl:justify-between xl:flex-row mt-5">
            <Answers
              answer={question.answer[2].ans}
              image={false}
              className="md:mr-5"
            />
            <Answers
              answer={question.answer[3].ans}
              image={false}
              className="xs:mt-5 md:ml-5 sm:mt-5"
            />
          </div>
        </>
      )}
    </div>
  );
}
Questions.prototype = {
  question1: PropTypes.object.isRequired,
};

export default Questions;
//cause we don't have content for the props it will fail durint the test this is why I comment out every thing
