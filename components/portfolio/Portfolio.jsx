import React from 'react';
import "./portfolio.css";
import {SiGithub} from "react-icons/si";
import {BsArrowRightShort} from "react-icons/bs";
import Image from "next/image";

const data = [
    {
        id: 1,
        image: "/img/1.jpg",
        title: "Modern blog",
        description: "Fullstack rest api application based on Next.js",
        github: "https://github.com/AnatoliyNBulyga/next-modern-blog",
        demo: "https://next-modern-blog.vercel.app/"
    },
    {
        id: 2,
        image: "/img/2.png",
        title: "E-commerce shop",
        description: "Fullstack e-commerce app based on Next.js and Strapi CMS",
        github: "https://github.com/AnatoliyNBulyga/next-strapi-e-shop",
        demo: "https://next-strapi-e-shop-client.vercel.app/"
    },
    {
        id: 3,
        image: "/img/3.png",
        title: "EBay clone",
        description: "Fullstack e-commerce app ebay shop clone",
        github: "https://github.com/AnatoliyNBulyga/next-supabase-ebay-c",
        demo: "https://ebay-c.vercel.app/"
    },
    {
        id: 4,
        image: "/img/portfolio4.jpg",
        title: "Saas AI Platform",
        description: "Fullstack rest api application based on Next.js",
        github: "https://github.com",
        demo: "https://github.com"
    }
]

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio section">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">My pet projects</span>

            <div className="container portfolio__container">
                {
                    data.map((item) => (
                        <article key={item.id} className="portfolio__item">
                            <div className="portfolio__item-image image">
                                <Image
                                    fill
                                    src={item.image}
                                    alt="Portfolio preview"
                                    sizes="(min-width: 600px) 50vw, 100vw"
                                />
                            </div>
                            <h3 className="portfolio__item-title">{item.title}</h3>
                            <span className="portfolio__item-description">{item.description}</span>
                            <div className="portfolio__item-cta">
                                <a href={item.github} target="_blank" className="btn portfolio__button">
                                    <SiGithub />
                                    Github
                                </a>
                                <a href={item.demo} target="_blank" className="btn btn--outline portfolio__button">
                                    Demo
                                    <BsArrowRightShort className="portfolio__button-action-icon"/>
                                </a>
                            </div>
                        </article>
                    ))
                }

            </div>
        </section>
    );
};

export default Portfolio;