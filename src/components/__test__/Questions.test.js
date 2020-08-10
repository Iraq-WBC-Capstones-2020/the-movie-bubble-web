import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import Questions from '../Questions/Questions';

it('render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Questions />, div);
});
