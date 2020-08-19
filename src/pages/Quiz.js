import React, { useEffect, useState } from 'react';
import FireWave from '../components/FireWaves/FireWave';
import Questions from './../components/Questions/Questions';
import { QuestionContext } from '../QuestionContext/QuestionContext';
export default function Quiz() {
  const [questions, setQuestions] = useState(undefined);

  useEffect(async () => {
    try {
      const response = await fetch('questiondata/question.json');
      const allQuestions = await response.json();
      console.log(allQuestions[0].questions);
      // console.log(Math.round(Math.random() * 1));
      setQuestions(allQuestions[0].questions);
    } catch (e) {
      console.error(e);
    }
  }, []);
  return (
    <>
      <div className="mh-screen">
        {questions && <Questions question={questions} />}
        <FireWave />
      </div>
    </>
  );
}
