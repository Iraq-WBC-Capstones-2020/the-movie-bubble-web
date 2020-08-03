import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ type, placeHolder }) {
  Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeHolder: PropTypes.string.isRequired,
    className: PropTypes.string,
  };
  return (
    <>
      <input
        type={type}
        placeholder={placeHolder}
        className={`inputWrapper__input w-2/3 mt-4`}
      />
      <div className={`inputWrapper__underLine  w-2/3 mb-4`}></div>
    </>
  );
}
