import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ type, placeholder, id, className }) {
  const inputStyle = {
    background: '#232d3a',
  };
  const underlineStyle = {
    height: '0.1rem',
    background: ' linear-gradient(270deg, #ff7521 11.7%, #ffb421 90.81%)',
  };
  return (
    <>
      <label htmlFor={id} className="text-white">
        {placeholder}
      </label>
      <div className={`w-5/6 -mb-1 mt-3`} style={underlineStyle}></div>
      <input
        type={type}
        placeholder={placeholder}
        className={`input w-5/6 mt-4 rounded-none text-white focus:outline-none ${className}`}
        id={id}
        style={inputStyle}
      />
      <div className={`w-5/6 mb-8`} style={underlineStyle}></div>
    </>
  );
}
Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
};
