import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TeamMember from '../components/TeamMember';
import './Aboutpage/Aboutpage.css';
const Aboutpage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  return (
    <>
      <div
        className="aboutpage  w-full py-24 px-64 text-center text-base
            overflow-hidden bg-gray-700 h-64 "
        data-aos="zoom-out"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>

      <TeamMember isRight name="Revan" image="" />
      <TeamMember name="Randa" image=""/>
      <TeamMember isRight name="Hewr" image=""/>
      <TeamMember name="shadan" image=""/>
      <TeamMember isRight name="Abdulrahman" image=""/>
    </>
  );
};
export default Aboutpage;
