import React from 'react';
import "./experience.css";

import BackendExperience from "./BackendExperience";
import FrontendExperience from "./FrontendExperience";


const Experience = () => {
    return (
        <section id="experience" className="experience section">
            <h2 className="section__title">Experience</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="container experience__container grid">
                <FrontendExperience />

                <BackendExperience />
            </div>
        </section>
    );
};

export default Experience;