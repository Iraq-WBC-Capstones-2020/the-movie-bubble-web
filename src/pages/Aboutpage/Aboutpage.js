import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TeamMember from '../../components/TeamMember/TeamMember';
import '../Aboutpage/Aboutpage.css';
import Img1 from '../../images/test1.jpeg';
import Img2 from '../../images/test2.jpeg';
import Img3 from '../../images/test3.jpeg';
import Img4 from '../../images/test4.jpeg';
import Img5 from '../../images/test5.jpeg';

const Aboutpage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  return (
    <div className="about-content">
      <div
        className="aboutpage w-full h-64 flex justify-center"
        data-aos="zoom-out"
      >
        <div className="text-3xl flex flex-col justify-center items-center h-full">
          <p className="font-bold text-center">
            Don't get lost in the internet looking for a movie to watch, with us
            you can find it in a minute.
          </p>
          <p className="text-xl opacity-75 pt-5">Built with love ❤️</p>
        </div>
      </div>

      <TeamMember isRight name="Revan" role="Team Member" image={Img1} />
      <TeamMember name="Randa Yahya" role="Team Member" image={Img2} />
      <TeamMember isRight name="Hewr" role="Team Member" image={Img3} />
      <TeamMember name="shadan" role="Team Member" image={Img4} />
      <TeamMember isRight name="Abdulrahman" role="Team Member" image={Img5} />
      <div className="h-24 flex justify-center items-center">
        <p className="text-white bg-orange-600 px-4 py-2">
          All rights reserved © The Movie Bubble 2020
        </p>
      </div>
    </div>
  );
};
export default Aboutpage;
