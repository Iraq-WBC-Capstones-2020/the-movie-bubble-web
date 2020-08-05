import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ type, placeholder, id, className }) {
  return (
    <>
      <label htmlFor={id} className="text-white">
        {placeholder}
      </label>
      <div className={`underLine  w-5/6 -mb-1 mt-3`}></div>
      <input
        type={type}
        placeholder={placeholder}
        className={`input w-5/6 mt-4 focus:outline-none ${className}`}
        id={id}
      />
      <div className={`underLine  w-5/6 mb-8`}></div>
    </>
  );
}
Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
};
