import React from 'react';
import 'aos/dist/aos.css';
import '././TeamMember/TeamMember.css';

export default function TeamMember({ isRight, name, image }) {
  // const isRight = props.isRight;
  if (isRight)
    return (
      <>
        <div className=" h-64 w-full bg-gray-900 flex overflow-hidden my-10">
          <div
            className="member-img w-3/5 h-full bg-black "
            data-aos="fade-right"
          >
            <img className="bg-cover bg-black" alt="" src={image}></img>
          </div>
          <div className="member-caption w-3/5 " data-aos="fade-left">
            <h3 className="items-center">{name}</h3>
          </div>
        </div>
      </>
    );
  return (
    <>
      <div className=" h-64 w-full bg-gray-900 flex flex-row-reverse overflow-hidden">
        <div
          className="member-img-left w-3/5 h-full bg-black"
          data-aos="fade-left"
        >
          <img className="bg-cover " alt="" src={image}></img>
        </div>
        <div className="member-caption-left w-3/5 h-full" data-aos="fade-right">
          <h3 className="aboutus__name items-center">{name}</h3>
        </div>
      </div>
    </>
  );
}
