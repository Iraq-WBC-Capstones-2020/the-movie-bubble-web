import React from 'react';
import SidebarNav from '../SidebarNav';
import { render } from '@testing-library/react';

test('Humburger menu gets rendered', () => {
  const { container } = render(<SidebarNav />);
  const toggle = container.querySelector('button svg');
  expect(toggle).toBeInTheDocument();
});
