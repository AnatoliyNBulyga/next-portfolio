import React from 'react';
import {BiLogoMongodb, BiLogoNodejs, BiLogoPostgresql} from "react-icons/bi";
import {SiExpress, SiFirebase, SiMysql, SiNestjs, SiPrisma, SiStrapi, SiSupabase} from "react-icons/si";

const BackendExperience = () => {
    return (
        <div className="experience__content">
            <h3 className="experience__title">Backend Development</h3>

            <div className="experience__box">
                <article className="experience__details">
                    <BiLogoNodejs className="experience__details-icon" />
                    <div>
                        <h3 className="experience__name">NodeJS</h3>
                        <span className="experience__level">Experienced</span>
                    </div>
                </article>
                <article className="experience__details">
                    <SiNestjs className="experience__details-icon" />
                    <div>
                        <h3 className="experience__name">NestJS</h3>
                        <span className="experience__level">Experienced</span>
                    </div>
                </article>
                <article className="experience__details">
                    <SiExpress className="experience__details-icon" />
                    <div>
                        <h3 className="experience__name">ExpressJS</h3>
                        <span className="experience__level">Intermediate</span>
                    </div>
                </article>
                <article className="experience__details">
                    <SiStrapi className="experience__details-icon" />
                    <div>
                        <h3 className="experience__name">StrapiJS</h3>
                        <span className="experience__level">Intermediate</span>
                    </div>
                </article>
                <article className="experience__details">
                    <SiFirebase className="experience__details-icon" />
                    <div>
                        <h3 className="experience__name">Firebase</h3>
                        <span className="experience__level">Intermediate</span>
                    </div>
                </article>
                <article className="experience__details">
                    <SiSupabase className="experience__details-icon" />
                    <div>
                        <h3 className="experience__name">Supabase</h3>
                        <span className="experience__level">Intermediate</span>
                    </div>
                </article>
                <article className="experience__details">
                    <BiLogoMongodb className="experience__details-icon" />
                    <div>
                        <h3 className="experience__name">MongoDB</h3>
                        <span className="experience__level">Intermediate</span>
                    </div>
                </article>
                <article className="experience__details">
                    <BiLogoPostgresql className="experience__details-icon" />
                    <div>
                        <h3 className="experience__name">PostgreSQL</h3>
                        <span className="experience__level">Intermediate</span>
                    </div>
                </article>
                <article className="experience__details">
                    <SiMysql className="experience__details-icon" />
                    <div>
                        <h3 className="experience__name">MySQL</h3>
                        <span className="experience__level">Intermediate</span>
                    </div>
                </article>
                <article className="experience__details">
                    <SiPrisma className="experience__details-icon" />
                    <div>
                        <h3 className="experience__name">Prisma.io</h3>
                        <span className="experience__level">Intermediate</span>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default BackendExperience;