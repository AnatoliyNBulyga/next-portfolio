import React from 'react';
import CTA from "../CTA";

const HomeContent = () => {
    return (
        <div className="home__data typewriter">
            <h1 className="home__title">
                Anatoliy Bulyga
            </h1>
            <h3 className="home__subtitle">Fullstack Developer</h3>
            <p className="home__description">I work with different business fields and provide high level service for my clients.</p>

            <CTA />
        </div>
    );
};

export default HomeContent;