import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ActorCard from './ActorCard';
import PropTypes from 'prop-types';
export default function ActorList(props) {
  const responsive = {
    xl: {
      breakpoint: { max: 3000, min: 1280 },
      items: 12,
    },
    lg: {
      breakpoint: { max: 1280, min: 1024 },
      items: 9,
    },
    md: {
      breakpoint: { max: 1024, min: 640 },
      items: 7,
    },
    sm: {
      breakpoint: { max: 640, min: 464 },
      items: 4,
    },
    xs: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  const actors = props.cast;
  const result = [];
  for (const x of actors) {
    if (x.profile_path) {
      result.push(x);
    }
  }
  console.log(result);
  return (
    <div className="w-11/12 h-screen mt-10">
      <Carousel responsive={responsive} className="pl-12 h-64">
        {result.map((actors) => (
          <div
            key={actors.id}
            className="transform -skew-x-20  overflow-hidden cursor-pointer  rounded-md w-24 h-48 actor-card"
          >
            <ActorCard actor={actors} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

ActorList.propTypes = {
  cast: PropTypes.array.isRequired,
};
