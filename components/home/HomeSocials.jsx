import React from 'react';
import {SiGithub, SiLinkedin} from "react-icons/si";

const HomeSocials = () => {
    return (
        <div className="home__socials">
            <a href="https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D0%BB%D0%B8%D0%B9-%D0%B1%D1%83%D0%BB%D1%8B%D0%B3%D0%B0-094503170/" target="_blank">
                <SiLinkedin className="home__socials-icon" />
            </a>
            <a href="https://github.com/AnatoliyNBulyga" target="_blank">
                <SiGithub className="home__socials-icon" />
            </a>
        </div>
    );
};

export default HomeSocials;