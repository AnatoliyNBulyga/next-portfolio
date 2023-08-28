import React from 'react';
import "./qualification.css";
import {BsCalendar2} from "react-icons/bs";

const Qualification = () => {
    return (
        <section id="qualification" className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__sections">
                <div className="qualification__content">

                    <div className="qualification__data">
                        <div className="qualification__info text-right">
                            <h3 className="qualification__title">Freelancer</h3>
                            <span className="qualificatio__subtitle">Freelance.ru, Fl.ru, Freelancer.com</span>
                            <div className="qualification__calendar flex-end">
                                <BsCalendar2 className="qualification__icon" />
                                feb 2017 - sept 2018
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">

                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div className="qualification__info">
                            <h3 className="qualification__title">Junior Web Dev</h3>
                            <span className="qualificatio__subtitle">Electronic Arts</span>
                            <div className="qualification__calendar">
                                <BsCalendar2 className="qualification__icon" />
                                sep 2018 - mar 2019
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">

                        <div className="qualification__info text-right">
                            <h3 className="qualification__title">Middle Web Dev</h3>
                            <span className="qualificatio__subtitle">Electronic Arts</span>
                            <div className="qualification__calendar flex-end">
                                <BsCalendar2 className="qualification__icon" />
                                mar 2019 - jul 2021
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">

                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div className="qualification__info">
                            <h3 className="qualification__title">FrontEnd Dev </h3>
                            <span className="qualificatio__subtitle">Incode Group</span>
                            <div className="qualification__calendar">
                                <BsCalendar2 className="qualification__icon" />
                                aug 2021 - jun 2022
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">

                        <div className="qualification__info text-right">
                            <h3 className="qualification__title">FullStack Dev</h3>
                            <span className="qualificatio__subtitle">Incode Group</span>
                            <div className="qualification__calendar flex-end">
                                <BsCalendar2 className="qualification__icon" />
                                jun 2022 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;