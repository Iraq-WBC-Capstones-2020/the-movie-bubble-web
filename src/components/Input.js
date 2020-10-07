import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ type, placeholder, id, className }) {
  return (
    <>
      <input
        aria-label={placeholder}
        type={type}
        placeholder={placeholder}
        className={`bg-darkgray input w-5/6 mt-4 rounded-none text-white focus:outline-none ${className}`}
        id={id}
      />
      <div className="w-5/6 mb-8 h-0.08 main-gradient"></div>
    </>
  );
}
Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
};
