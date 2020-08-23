import React from 'react';
import Menu from './HamburgerMenu/SidebarNav';
import Logo from './Logo/Logo';
import PropTypes from 'prop-types';
export default function Navbar({ reset }) {
  return (
    <div className="bg-darkgray top-0 sticky z-10">
      <Menu reset={reset} />
      <Logo />
    </div>
  );
}
Navbar.propTypes = {
  reset: PropTypes.func.isRequired,
};
