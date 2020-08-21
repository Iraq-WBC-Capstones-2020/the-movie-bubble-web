import React from 'react';
import Menu from './HamburgerMenu/SidebarNav';
import Logo from './Logo/Logo';
export default function Navbar({ reset }) {
  return (
    <div className="bg-darkgray top-0 sticky z-10">
      <Menu reset={reset} />
      <Logo />
    </div>
  );
}
