import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ActorCard from './ActorCard';
import PropTypes from 'prop-types';
export default function ActorList() {
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
  const actors = [
    {
      id: '0',
      actor_name: 'Margot Robbie',
      actor_image:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/ecv9SBN9m1cEZFfSopph6wf8fk.jpg',
    },
    {
      id: '1',
      actor_name: 'Ewan McGregor',
      actor_image:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/aEmyadfRXTmmR7UW7OXsm5a6smS.jpg',
    },
    {
      id: '2',
      actor_name: 'Mary Elizabeth Winstead',
      actor_image:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/cBMtncBcUrKMTB8CifDG23THuCE.jpg',
    },
    {
      id: '3',
      actor_name: 'Jurnee Smollett',
      actor_image:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/jzpxcydjOM1QlOvQD0AdfWdXJDb.jpg',
    },
    {
      id: '4',
      actor_name: 'Rosie Perez',
      actor_image:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/1AD61lJoegfgYIOMezaYlCpbitJ.jpg',
    },
    {
      id: '5',
      actor_name: 'Chris Messina',
      actor_image:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/l9DbQTK5pI6SOGpmfbADGLhdOYS.jpg',
    },
    {
      id: '6',
      actor_name: 'Ella Jay Basco',
      actor_image:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/qCDNp5KPCemOl6L9jD1xTSTWybl.jpg',
    },
    {
      id: '7',
      actor_name: 'Ali Wong',
      actor_image:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/zrzLHVEKrTqlD7o60ChfZoPA9Nn.jpg',
    },
    {
      id: '8',
      actor_name: 'Elisabeth Shue',
      actor_image:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/wofhdwRvSLE07tcHPRyNApVzIl9.jpg',
    },
    {
      id: '9',
      actor_name: 'Stephen Graham',
      actor_image:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/rmcuf3aYgINJWp0aWNA2uNdxwUJ.jpg',
    },
    {
      id: '10',
      actor_name: 'Craig Tate',
      actor_image:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/509fvrZgzAcXrJ3zKSIvwb7J3Ck.jpg',
    },
    {
      id: '11',
      actor_name: 'Rob Morgan',
      actor_image:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/yIQd0L0kn1HyZGeEMkUREzMslP0.jpg',
    },
    {
      id: '12',
      actor_name: 'Travis Quentin',
      actor_image:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/kKigafc719ofEaUfOMWS2wpr5oq.jpg',
    },
  ];
  return (
    <div className=" mr-auto ml-auto w-11/12 h-screen mt-20">
      <Carousel responsive={responsive} className="pl-8 h-64">
        {actors.map((actordata) => (
          <div
            key={actordata.id}
            className="transform -skew-x-20  overflow-hidden cursor-pointer  rounded-md w-24 h-48 actor-card"
          >
            <ActorCard actor={actordata} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

ActorList.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      actor_name: PropTypes.string,
      actor_image: PropTypes.string,
    })
  ),
};
