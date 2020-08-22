import React, { useEffect, useState } from 'react';
import FireWave from '../components/FireWaves/FireWave';
import Questions from './../components/Questions/Questions';
import ProgressBar from './../components/ProgressBar';
import PropTypes from 'prop-types';
export default function Quiz({ result, index, prog }) {
  const [questions, setQuestions] = useState([]);
  const [progress, setProgress] = prog;
  useEffect(() => {
    fetch('questiondata/question.json')
      .then((response) => response.json())
      .then((allQuestions) => {
        setQuestions(
          allQuestions[Math.round(Math.random() * (allQuestions.length - 1))]
            .questions
        );
      })
      .catch();
  }, []);
  return (
    <div className=" relative bg-darkgray h-auto">
      <div className="flex justify-end md:absolute md:right-0">
        <div className="mr-8">
          <ProgressBar progress={progress} width={150} height={150} />
        </div>
      </div>
      <div className="">
        {questions.length !== 0 && (
          <Questions
            question={questions[index[0]]}
            progress={setProgress}
            result={result}
            index={index}
            numOfQ={questions.length}
          />
        )}
      </div>
      <div>
        <FireWave />
      </div>
    </div>
  );
}
Quiz.propTypes = {
  result: PropTypes.func.isRequired,
  index: PropTypes.array.isRequired,
  prog: PropTypes.array.isRequired,
};
