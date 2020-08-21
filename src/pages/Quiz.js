import React, { useEffect, useState } from 'react';
import FireWave from '../components/FireWaves/FireWave';
import Questions from './../components/Questions/Questions';
import ProgressBar from './../components/ProgressBar';
import PropTypes from 'prop-types';
export default function Quiz({ result, index, prog }) {
  const [questions, setQuestions] = useState([]);
  const [progress, setProgress] = prog;

  // useEffect(async () => {
  //   try {
  //     const response = await fetch('questiondata/question.json');
  //     const allQuestions = await response.json();
  //     // console.log(Math.round(Math.random() * 1));
  //     setQuestions(allQuestions[0].questions);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }, []);
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
      <div className="flex justify-end absolute right-0">
        <div className="mr-8">
          <ProgressBar progress={progress} width={150} height={150} />
        </div>
      </div>
      <div className="max-h-screen">
        {questions.length != 0 && (
          <Questions
            question={questions[index[0]]}
            progress={setProgress}
            result={result}
            index={index}
          />
        )}
      </div>
      <div>
        <FireWave />
      </div>
    </div>
  );
}

Quiz.prototype = {
  result: PropTypes.func.isRequired,
};
