import * as React from 'react';
import { motion } from 'framer-motion';
import ListItem from './ListItems';
import PropTypes from 'prop-types';
const variants = {
  open: {
    y: 0,
    opacity: 1,
    display: 'flex',
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    display: 'none',

    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function NavList({ toggle, reset }) {
  return (
    <>
      <motion.ul
        className="p-2 absolute  w-full flex flex-col items-center h-screen "
        variants={variants}
      >
        <ListItem toggler={toggle} reset={reset} />

        <h1 className="absolute bottom-0 mb-10 ">All Rights Reserved.</h1>
      </motion.ul>
    </>
  );
}
NavList.propTypes = {
  toggle: PropTypes.func.isRequired,
};
