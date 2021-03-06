import React, { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import useDimensions from './useDimensions';
import Toggler from './Toggler';
import NavList from './NavList';
import PropTypes from 'prop-types';
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 86.8% 40px)`,
    transition: {
      type: 'spring',
      stiffness: 30,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(28px at 84.5% 40px)',
    transition: {
      type: 'spring',
      stiffness: 550,
      damping: 40,
    },
  },
};
const variants = {
  open: {
    width: '16rem',
  },
  closed: {
    width: '5rem',
  },
};

export default function SidebarNav({ reset }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <>
      <motion.nav
        variants={variants}
        className="absolute z-10 h-screen	 top-0 right-0 w-64 bottom-0 overflow-hidden"
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
      >
        <motion.div
          style={{
            background: `linear-gradient(270deg, #FF7521 11.7%, #FFB421 90.81%)`,
          }}
          className="absolute	 top-0 right-0 w-64 bottom-0 "
          variants={sidebar}
        />
        <NavList toggle={() => toggleOpen()} reset={reset} />

        <Toggler toggle={() => toggleOpen()} />
      </motion.nav>
    </>
  );
}
SidebarNav.propTypes = {
  reset: PropTypes.func.isRequired,
};
