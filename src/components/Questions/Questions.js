import React, { useState } from 'react';
import Answers from './Answers';
import PropTypes from 'prop-types';
import { QuestionContext } from '../../QuestionContext/QuestionContext';
function Questions({question}) {
  const [index, setIndex] = useState(1)
  const [result, setResult] = useState([])
  console.log(question[1]);
  return (
    <div className="flex flex-col bg-darkgray w-full justify-center items-center">
      <div className="imgWrapper flex w-64 h-64">
        <img src={question[index].image} alt="question" className="flex" />
      </div>
      <div className="flex content-center text-white p-5">
        <span className="sm:text-2xl md:text-2xl text-3xl md:px-24 xs:text-xl lg:px-32 xl:px-48 text-center">
          {question[index].question}
        </span>
      </div>
      <div className="flex justify-center w-full h-1/2 border">
        <div className="grid md:grid-cols-2 md:col-gap-32 lg:grid-cols-2 lg:col-gap-56 xl:grid-cols-2 xl:col-gap-64 w-5/6  row-gap-10  h-full">
          {question[index].answers.map((element) => (
            <Answers
              answer={element.ans}
              image={question[index].includeImage}
              index={index}
              questionVal={element.val}
              result={setResult}
            />
          ))}
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
