import React, { useState, createContext } from 'react';
export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState([]);
  const [questions, setQuestions] = useState({});
  const [movieResult, setMovieResult] = useState([]);
  return (
    <div>
      <QuestionContext.Provider
        value={[
          questions,
          setQuestions,
          index,
          setIndex,
          result,
          setResult,
          movieResult,
          setMovieResult,
        ]}
      >
        {children}
      </QuestionContext.Provider>
    </div>
  );
};
