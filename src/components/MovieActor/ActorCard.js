import React from 'react';
import './ActorCard.css';
import PropTypes from 'prop-types';
export default function ActorCard({ actor }) {
  return (
    <>
      <img
        className="transform skew-x-6 object-cover w-32 -ml-3 h-48 overflow-hidden max-w-none"
        src={actor.actor_image}
        alt="actor"
      />
      <div className="actor-card__name absolute inset-x-0 bottom-0 h-12 bg-gray-100 hidden">
        <h1 className=" text-center text-orange-600 font-bold ">
          {actor.actor_name}
        </h1>
      </div>
    </>
  );
}
ActorCard.propTypes = {
  actor: PropTypes.arrayOf(
    PropTypes.shape({
      actor_name: PropTypes.string,
      actor_image: PropTypes.string,
    })
  ),
};
