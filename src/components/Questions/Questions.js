import React from 'react';
import Answers from './Answers';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

Questions.propTypes = {
  question: PropTypes.objectOf(PropTypes.array).isRequired,
  progress: PropTypes.func.isRequired,
  result: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  numOfQ: PropTypes.number.isRequired,
};

function Questions({ question, progress, result, index, numOfQ }) {
  const [questionIndex, setQuestionIndex] = index;
  return (
    <>
      {questionIndex <= numOfQ - 1 && (
        <div className="flex flex-col bg-darkgray w-full justify-center items-center">
          <div className="imgWrapper flex w-64 h-64">
            <img src={question.image} alt="question" className="flex" />
          </div>
          <div className="flex content-center text-white p-5">
            <span className="text-2xl lg:text-3xl md:px-24 xs:text-xl lg:px-32 xl:px-48 text-center">
              {question.question}
            </span>
          </div>
          <div className="flex justify-center w-full h-1/2 min-h-16">
            <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 md:col-gap-24 lg:col-gap-3   w-5/6  row-gap-10  h-full ">
              {question.answers.map((element, index) => (
                <Answers
                  key={index}
                  answer={element.ans}
                  image={question.includeImage}
                  index={setQuestionIndex}
                  questionVal={element.val}
                  result={result}
                  progress={progress}
                  key1={question.key}
                  numOfQ={numOfQ}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      {questionIndex > numOfQ - 1 && <Redirect to="/result" />}
    </>
  );
}

export default Questions;
