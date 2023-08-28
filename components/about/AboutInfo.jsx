import React from 'react';
import {FiUsers} from "react-icons/fi";
import {LiaBusinessTimeSolid} from "react-icons/lia";
import {BiBook} from "react-icons/bi";

const AboutInfo = () => {
    return (
        <div className="about__info grid">
            <article className="about__card">
                <BiBook className="about__icon"/>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">5+ Years Working</span>
            </article>

            <article className="about__card">
                <FiUsers className="about__icon"/>
                <h3 className="about__title">Clients</h3>
                <span className="about__subtitle">50+ Worldwide</span>
            </article>

            <article className="about__card">
                <LiaBusinessTimeSolid className="about__icon"/>
                <h3 className="about__title">Projects</h3>
                <span className="about__subtitle">40+ Completed</span>
            </article>
        </div>
    );
};

export default AboutInfo;