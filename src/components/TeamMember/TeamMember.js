import React from 'react';
import 'aos/dist/aos.css';
import '../TeamMember/TeamMember.css';

export default function TeamMember({ isRight, name, role, image }) {
  if (isRight)
    return (
      <div className="teammember w-full flex overflow-hidden mt-10">
        <div className="member-img h-full" data-aos="fade-right">
          <img
            className="w-full lg:w-6/12 sm:w-full"
            alt=""
            src={image}
          ></img>
        </div>
        <div
          className="member-caption flex flex-col justify-center items-center"
          data-aos="fade-left"
        >
          <h1 className="member-name text-white">{name}</h1>
          <h2 className="member-role text-white">{role}</h2>
        </div>
      </div>
    );
  return (
    <div className="teammember w-full  flex flex-row-reverse overflow-hidden mt-10">
      <div className="member-img-left  h-full" data-aos="fade-left">
        <img className="bg-cover" alt="team member" src={image}></img>
      </div>
      <div
        className="member-caption-left flex flex-col justify-center items-center"
        data-aos="fade-right"
      >
        <h1 className="text-white member-name">{name}</h1>
        <h2 className="text-white member-role">{role}</h2>
      </div>
    </div>
  );
}
