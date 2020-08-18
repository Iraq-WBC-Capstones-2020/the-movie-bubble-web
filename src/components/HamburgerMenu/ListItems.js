import * as React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BrowserRouter,NavLink } from 'react-router-dom';

export default function ListItems({ toggler }) {
  return (
    <>
      <motion.li
        className="bg-gray-900 w-32 text-center mt-48  my-5 cursor-pointer rounded"
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.95 }}
      >
        <NavLink to="/">
          <button
            onClick={toggler}
            className="w-full py-2 focus:outline-none text-white"
          >
            Home
          </button>
        </NavLink>
      </motion.li>
      <motion.li
        className="bg-gray-900 w-32 text-center  my-5 cursor-pointer rounded"
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.95 }}
      >
        <NavLink to="/quiz">
          <button
            onClick={toggler}
            className="w-full py-2 focus:outline-none text-white"
          >
            Take a quiz
          </button>
        </NavLink>
      </motion.li>
      <motion.li
        className="bg-gray-900 w-32 text-center  my-5 cursor-pointer rounded"
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.95 }}
      >
        <NavLink to="/about">
          <button
            onClick={toggler}
            className="w-full py-2 focus:outline-none text-white"
          >
            About us
          </button>
        </NavLink>
      </motion.li>
    </>
  );
}
ListItems.propTypes = {
  toggler: PropTypes.func.isRequired,
};
