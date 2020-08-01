import React from 'react';
import SidebarNav from '../SidebarNav';
import renderer from 'react-test-renderer';
test('Humburger menu snapshot testd succesfuly', () => {
  const tree = renderer.create(<SidebarNav />).toJSON();
  expect(tree).toMatchSnapshot();
});
