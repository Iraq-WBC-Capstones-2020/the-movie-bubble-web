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
    <>
      <div className="about-content">
        <div
          className="aboutpage  w-full py-24 px-64 relative text-base
            overflow-hidden bg-gray-700 h-64 "
          data-aos="zoom-out"
        >
          <p className="aboutpage-text absolute">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <TeamMember isRight name="Revan" role="Team Member" image={Img1} />
        <TeamMember name="Randa Yahya" role="Team Member" image={Img2} />
        <TeamMember isRight name="Hewr" role="Team Member" image={Img3} />
        <TeamMember name="shadan" role="Team Member" image={Img4} />
        <TeamMember
          isRight
          name="Abdulrahman"
          role="Team Member"
          image={Img5}
        />
      </div>
    </>
  );
};
export default Aboutpage;
