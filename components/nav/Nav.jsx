import React, {useState} from 'react';
import "./nav.css";
import {AiOutlineHome, AiOutlineMail, AiOutlineUser} from "react-icons/ai";
import {BiBook, BiMailSend, BiMessageSquareDetail} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import {SiKnowledgebase, SiMinutemailer} from "react-icons/si";
import {LiaBusinessTimeSolid} from "react-icons/lia";
import {BsBriefcase} from "react-icons/bs";
import {GoProjectRoadmap} from "react-icons/go";

const Nav = ({ activeNav, setActiveNav}) => {

    return (
        <nav>
            <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={activeNav === '#home' ? 'active' : ''}
            >
                <AiOutlineHome />
            </a>
            <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={activeNav === '#about' ? 'active' : ""}
            >
                <AiOutlineUser />
            </a>
            <a
                href="#experience"
                onClick={() => setActiveNav("#experience")}
                className={activeNav === '#experience' ? 'active' : ""}
            >
                <BiBook />
            </a>
            <a
                href="#qualification"
                onClick={() => setActiveNav("#qualification")}
                className={activeNav === '#qualification' ? 'active' : ""}
            >
                <GoProjectRoadmap />
            </a>
            <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={activeNav === '#portfolio' ? 'active' : ""}
            >
                <BsBriefcase />
            </a>
            <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={activeNav === '#contact' ? 'active' : ""}
            >
                <BiMailSend />
            </a>
        </nav>
    );
};

export default Nav;