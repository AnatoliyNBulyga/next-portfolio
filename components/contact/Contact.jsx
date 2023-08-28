import React from 'react';
import "./contact.css";
import {AiOutlineMail} from "react-icons/ai";
import {SiLinkedin, SiTelegram} from "react-icons/si";
import {BsArrowRightShort} from "react-icons/bs";

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get In Touch</span>

            <div className="container contact__container">
                <article className="contact__option">
                    <AiOutlineMail className="contact__option-icon" />
                    <h4>Email</h4>
                    <h5>anatoliynbulyga@gmal.com</h5>
                    <a href="mailto:anatoliynbulyga@gmail.com" target="_blank" className="contact__button">
                        Send a message <BsArrowRightShort className="contact__button-icon" />
                    </a>
                </article>
                <article className="contact__option">
                    <SiTelegram className="contact__option-icon" />
                    <h4>Telegram</h4>
                    <h5>@sth_was_occurred</h5>
                    <a href="https://t.me/sth_was_occurred" target="_blank" className="contact__button">
                        Send a message <BsArrowRightShort className="contact__button-icon" />
                    </a>
                </article>
                <article className="contact__option">
                    <SiLinkedin className="contact__option-icon" />
                    <h4>Linkedin</h4>
                    <h5>anatoliy-bulyga</h5>
                    <a href="https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D0%BB%D0%B8%D0%B9-%D0%B1%D1%83%D0%BB%D1%8B%D0%B3%D0%B0-094503170/" target="_blank" className="contact__button">
                        Send a message <BsArrowRightShort className="contact__button-icon" />
                    </a>
                </article>
            </div>
        </section>
    );
};

export default Contact;