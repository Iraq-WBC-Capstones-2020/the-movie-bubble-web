import React, { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import useDimensions from './UseDimensions';
import Toggler from './Toggler';
import NavList from './NavList';
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 86.8% 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(28px at 84.5% 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function SidebarNav() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <>
      <motion.nav
        className="absolute	 top-0 right-0 w-64 bottom-0 overflow-hidden"
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
      >
        <motion.div
          className="absolute	 top-0 right-0 w-64 bottom-0 bg-orange-400"
          variants={sidebar}
        />
        <NavList />

        <Toggler toggle={() => toggleOpen()} />
      </motion.nav>
    </>
  );
}
