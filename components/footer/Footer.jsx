import React from 'react';
import "./footer.css";
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {SiGithub, SiLinkedin} from "react-icons/si";

const Footer = () => {
    return (
        <footer className="footer">
            <a href="#" className="footer__logo">ANATOLIO</a>

            <ul className="footer__permalinks">
                <li><a href="#home" className="footer__link">Home</a></li>
                <li><a href="#aboout" className="footer__link">About</a></li>
                <li><a href="#experience" className="footer__link">Experience</a></li>
                <li><a href="#qualification" className="footer__link">Qualification</a></li>
                <li><a href="#portfolio" className="footer__link">Portfolio</a></li>
                <li><a href="#contact" className="footer__link">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a
                    href="https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D0%BB%D0%B8%D0%B9-%D0%B1%D1%83%D0%BB%D1%8B%D0%B3%D0%B0-094503170/"
                    target="_blank"
                    className="footer__socials-link"
                >
                    <SiLinkedin />
                </a>
                <a
                    href="https://github.com/AnatoliyNBulyga"
                    target="_blank"
                    className="footer__socials-link"
                >
                    <SiGithub />
                </a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Anatolio WebSite. All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;