import * as React from 'react';
import { motion } from 'framer-motion';
import ListItem from './ListItems';
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

export default function NavList() {
  return (
    <>
      <motion.ul
        className="p-2 absolute  w-full flex flex-col items-center h-full "
        variants={variants}
      >
        <ListItem />

        <h1 className="absolute bottom-0 mb-10 ">All Rights Reserved.</h1>
      </motion.ul>
    </>
  );
}
