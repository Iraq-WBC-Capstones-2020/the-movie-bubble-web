import React from 'react';
import './ActorCard.css';
import PropTypes from 'prop-types';
export default function ActorCard({ actor }) {
  return (
    <>
      <img
        className="transform skew-x-6 object-cover w-32 -ml-3 h-48 overflow-hidden max-w-none"
        src={"https://image.tmdb.org/t/p/w185" + actor.profile_path
        }
        alt="actor"
      />
      <div className="actor-card__name absolute inset-x-0 bottom-0 h-10 bg-black bg-opacity-75 hidden">
        <h1 className=" text-center text-sm text-gray-300">
          {actor.name}
        </h1>
      </div>
    </>
  );
}
ActorCard.propTypes = {
  actor:
    PropTypes.shape({
      name: PropTypes.string,
      profile_path: PropTypes.string,
    })
};
