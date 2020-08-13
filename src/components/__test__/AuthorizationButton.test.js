import React from 'react';
import ReactDOM from 'react-dom';
import AuthorizationButton from '../AuthorizationButton';
import '@testing-library/jest-dom/extend-expect';

it('render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthorizationButton />, div);
});
