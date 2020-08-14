import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './../LoginForm';
import '@testing-library/jest-dom/extend-expect';

it('render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginForm />, div);
});
