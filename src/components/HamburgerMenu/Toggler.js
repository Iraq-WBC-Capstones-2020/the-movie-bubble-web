import * as React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Path = ({ variants, transition, d }) => {
  let merged = { variants, transition, d };
  console.log(merged);
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...merged}
    />
  );
};

Path.propTypes = {
  variants: PropTypes.object.isRequired,
  transition: PropTypes.object.isRequired,
  d: PropTypes.string,
};
const Toggler = ({ toggle }) => {
  return (
    <button
      onClick={toggle}
      className="absolute mt-5 mr-2	focus:outline-none top-0 right-0 w-12 h-12 bottom-0 "
    >
      <svg width="35" height="35" viewBox="0 0 23 23" fill="white" stroke="red">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
          transition={{ duration: 0.3 }}
        />
        <Path
          d="M 5 9.423 L 15 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.3 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
          transition={{ duration: 0.3 }}
        />
      </svg>
    </button>
  );
};
Toggler.propTypes = {
  toggle: PropTypes.func.isRequired,
};
export default Toggler;
