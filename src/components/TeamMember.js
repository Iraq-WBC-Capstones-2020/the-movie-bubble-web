import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Img1 from './images/test2.jpg';
import Img2 from './images/test4.jpg';

export default function TeamMember (props){
        useEffect(() => {
        AOS.init({
            duration: 2000,
        });
        });
        const isRight = props.isRight;
        if (isRight)
        return (
            <>
            <div className="aboutus w-full bg-gray-900 flex overflow-hidden">
                <div className="black" data-aos="fade-right">
                <img className="aboutus__member" alt="hi" src={Img1}></img>
                </div>
                <div className="orange" data-aos="fade-left">
                <h3 className="aboutus__name">{props.aboutus__name}</h3>
                </div>
            </div>
            </>
        );
        return (
        <>
            <div className="aboutus w-full bg-gray-900 flex flex-row-reverse overflow-hidden">
            <div className="black-left" data-aos="fade-right">
                <img className="aboutus__member" alt="" src={Img2}></img>
            </div>
            <div className="orange-left" data-aos="fade-left">
                <h3 className="aboutus__name">{props.aboutus__name}</h3>
            </div>
            </div>
        </>
        );
    };
