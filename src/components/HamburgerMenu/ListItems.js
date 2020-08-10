import * as React from 'react';
import { motion } from 'framer-motion';

export default function ListItems() {
  return (
    <>
      <motion.li
        className="bg-gray-900 w-32 text-center mt-48  my-5 cursor-pointer rounded"
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.95 }}
      >
        <button className="w-full py-2 focus:outline-none text-white">
          Home
        </button>
      </motion.li>
      <motion.li
        className="bg-gray-900 w-32 text-center  my-5 cursor-pointer rounded"
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.95 }}
      >
        <button className="w-full py-2 focus:outline-none text-white">
          Take a quiz
        </button>
      </motion.li>
      <motion.li
        className="bg-gray-900 w-32 text-center  my-5 cursor-pointer rounded"
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.95 }}
      >
        <button className="w-full py-2 focus:outline-none text-white">
          About us
        </button>
      </motion.li>
    </>
  );
}
