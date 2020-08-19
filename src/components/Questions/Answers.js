import React from 'react';
import PropTypes from 'prop-types';
function Answers({ answer, image, questionVal, result }) {
  return (
    <button
      className="transform main-gradient hover:scale-105 rounded-lg p-0.08 flex justify-center min-h-10 items-center mx-10 h-1/3"
      onClick={() => {
        result((pr) => [...pr, questionVal]);
        console.log(questionVal);
      }}
    >
      <div className="p-1 h-full w-full bg-darkgray rounded-lg flex items-center justify-center">
        {image && (
          <img
            src={answer}
            alt="answer"
            className="rounded-lg border w-full h-full"
          />
        )}
        {!image && <span className="text-white">{answer}</span>}
      </div>
    </button>
  );
}
Answers.propTypes = {
  answer: PropTypes.string.isRequired,
  image: PropTypes.bool.isRequired,
  questionVal: PropTypes.string.isRequired,
  result: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Answers;
