import React from 'react';
import {BiLogoJavascript, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript} from "react-icons/bi";
import {SiAntdesign, SiChakraui, SiCss3, SiHtml5, SiNextdotjs} from "react-icons/si";
import MaterialUI from "../icons/Material";

const FrontendExperience = () => {
    return (
        <div className="experience__content">
            <h3 className="experience__title">Frontend Development</h3>

            <div className="experience__box">
                <article className="experience__details">
                    <SiHtml5 className="experience__details-icon" />
                    <div>
                        <h3 className="experience__name">HTML</h3>
                        <span className="experience__level">Experienced</span>
                    </div>
                </article>
                <article className="experience__details">
                    <SiCss3 className="experience__details-icon" />
                    <div>
                        <h3 className="experience__name">CSS</h3>
                        <span className="experience__level">Experienced</span>
                    </div>
                </article>
                <article className="experience__details">
                    <BiLogoJavascript className="experience__details-icon" />
                    <div>
                        <h3 className="experience__name">JavaScript</h3>
                        <span className="experience__level">Experienced</span>
                    </div>
                </article>

                <article className="experience__details">
                    <BiLogoReact className="experience__details-icon" />
                    <div>
                        <h3 className="experience__name">ReactJS</h3>
                        <span className="experience__level">Experienced</span>
                    </div>
                </article>

                <article className="experience__details">
                    <SiNextdotjs className="experience__details-icon" />
                    <div>
                        <h3 className="experience__name">NextJS</h3>
                        <span className="experience__level">Experienced</span>
                    </div>
                </article>

                <article className="experience__details">
                    <BiLogoTypescript className="experience__details-icon" />
                    <div>
                        <h3 className="experience__name">TypeScript</h3>
                        <span className="experience__level">Experienced</span>
                    </div>
                </article>

                <article className="experience__details">
                    <BiLogoTailwindCss className="experience__details-icon" />
                    <div>
                        <h3 className="experience__name">Tailwind</h3>
                        <span className="experience__level">Experienced</span>
                    </div>
                </article>
                <article className="experience__details">
                    <MaterialUI className="experience__details-icon" />
                    <div>
                        <h3 className="experience__name">Material UI</h3>
                        <span className="experience__level">Experienced</span>
                    </div>
                </article>
                <article className="experience__details">
                    <SiAntdesign className="experience__details-icon" />
                    <div>
                        <h3 className="experience__name">Ant Design</h3>
                        <span className="experience__level">Experienced</span>
                    </div>
                </article>
                <article className="experience__details">
                    <SiChakraui className="experience__details-icon" />
                    <div>
                        <h3 className="experience__name">Chakra UI</h3>
                        <span className="experience__level">Experienced</span>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default FrontendExperience;