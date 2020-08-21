import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
function Answers({ answer, image, questionVal, result, index, progress }) {
  let history = useHistory();
  console.log(history);
  return (
    <button
      className={`transform main-gradient hover:scale-105 rounded-lg p-1 flex justify-center min-h-16 items-center ${
        image ? 'xl:w-64 ml-56 min-h-16 mx-10 ' : 'lg:mx-32'
      }`}
      onClick={() => {
        progress((pr) => pr + 20);
        index((pr) => pr + 1);
        result((pr) => [...pr, questionVal]);
        console.log(questionVal);
      }}
    >
      <div className="p-4 h-full w-full bg-darkgray rounded-lg flex items-center justify-center">
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
  questionVal: PropTypes.string.isRequired,
  result: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.func.isRequired,
  progress: PropTypes.func.isRequired,
};
export default Answers;
