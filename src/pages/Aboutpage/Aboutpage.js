import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TeamMember from '../../components/TeamMember/TeamMember';
import '../Aboutpage/Aboutpage.css';
import Img1 from '../../images/wissam.png';
import Img2 from '../../images/osama.png';
import Img3 from '../../images/revan.png';
import Img4 from '../../images/randa.jpg';
import Img5 from '../../images/hewr.jpg';
import Img6 from '../../images/shadan.png';
import Img7 from '../../images/abdulrahman.jpg';

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
            Don&apos;t get lost in the internet looking for a movie to watch,
            with us you can find a movie in a minute.
          </p>
          <p className="text-xl opacity-75 pt-5">
            Built with love{' '}
            <span aria-label="heart emoji" role="img">
              ❤️
            </span>
          </p>
        </div>
      </div>
      <TeamMember
        isRight
        name="Osama Abdullah"
        role="Team Leader"
        image={Img2}
      />
      <TeamMember name="Wissam Naji" role="Team Leader" image={Img1} />
      <TeamMember
        isRight
        name="Revan Sarbast"
        role="Team Member"
        image={Img3}
      />
      <TeamMember name="Randa Yahya" role="Team Member" image={Img4} />
      <TeamMember isRight name="Hewr Srood" role="Team Member" image={Img5} />
      <TeamMember name="Shadan Abdulkarim" role="Team Member" image={Img6} />
      <TeamMember
        isRight
        name="Abdulrahman Maher"
        role="Team Member"
        image={Img7}
      />
      <div className="h-24 flex justify-center items-center">
        <p className="text-white bg-orange-600 px-4 py-2">
          All rights reserved © The Movie Bubble 2020
        </p>
      </div>
    </div>
  );
};
export default Aboutpage;
