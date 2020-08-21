import React from 'react';
import Answers from './Answers';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
function Questions({ question, progress, result, index }) {
  const [questionIndex, setQuestionIndex] = index;
  return (
    <>
      {questionIndex <= 4 && (
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
            <div className="grid md:grid-cols-2 md:col-gap-24 lg:col-gap-3   w-5/6  row-gap-10  h-full ">
              {question.answers.map((element) => (
                <Answers
                  answer={element.ans}
                  image={question.includeImage}
                  index={setQuestionIndex}
                  questionVal={element.val}
                  result={result}
                  progress={progress}
                  key1={question.key}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      {questionIndex > 4 && <Redirect to="/result" />}
    </>
  );
}
Questions.prototype = {
  question: PropTypes.object.isRequired,
  progress: PropTypes.func.isRequired,
  result: PropTypes.func.isRequired,
  result: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
};

export default Questions;
