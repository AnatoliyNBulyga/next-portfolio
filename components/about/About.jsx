import React from 'react';
import "./about.css";
import CTA from "../CTA";
import AboutInfo from "./AboutInfo";
import Image from "next/image";

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>

            <div className="container about__container grid">
                <div className="about__me">
                    <div className="about__me-image image">
                        <Image
                            fill
                            src="/img/ava2.jpg"
                            alt="About me photo"
                            sizes="(min-width: 600px) 50vw, 100vw"
                        />
                    </div>
                </div>

                <div className="about__data">
                    <AboutInfo />

                    <div className="about__description">
                        <p>
                            I have more than 5 years of commercial experience with JavaScript based frameworks, libraries and services. Some of them have listed below in the next section.
                        </p>

                        <p>
                            Overall, I use the best practice writing clean, testable, efficient, and maintainable code.
                        </p>

                        <p>
                            I’m open to your suggestions.
                        </p>
                    </div>
                    <CTA />
                </div>
            </div>
        </section>
    );
};

export default About;