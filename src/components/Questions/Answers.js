import React from 'react';
import PropTypes from 'prop-types';
function Answers({
  answer,
  image,
  questionVal,
  result,
  index,
  progress,
  key1,
  numOfQ,
}) {
  return (
    <button
      className={`transform main-gradient hover:scale-105 rounded-lg p-1 flex justify-center max-w-70 min-h-16 items-center w-full ${
        image ? ' xl:ml-48 h-full mx-4 w-full ' : 'lg:mx-32'
      }`}
      onClick={() => {
        progress((pr) => pr + 100 / numOfQ);
        index((pr) => pr + 1);
        result((pr) => [...pr, { [key1]: questionVal }]);
      }}
    >
      <div className="p-4 min-h-full min-w-full bg-darkgray rounded-lg flex items-center justify-center">
        {image && (
          <img
            src={answer}
            alt="answer"
            className="rounded-lg w-full max-h-70"
          />
        )}
        {!image && <span className="text-white text-2xl">{answer}</span>}
      </div>
    </button>
  );
}
Answers.propTypes = {
  answer: PropTypes.string.isRequired,
  image: PropTypes.bool.isRequired,
  questionVal: PropTypes.any.isRequired,
  result: PropTypes.func.isRequired,
  index: PropTypes.func.isRequired,
  progress: PropTypes.func.isRequired,
  key1: PropTypes.string.isRequired,
  numOfQ: PropTypes.number.isRequired,
};
export default Answers;
