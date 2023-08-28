"use client";

import HomeSocials from "./HomeSocials";
import HomeContent from "./HomeContent";
import {SlMouse} from "react-icons/sl";
import {BsArrowDownShort} from "react-icons/bs";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import Preloader from "@/components/preloader/Preloader";
import Header from "@/components/home/Header";

import "./home.css";


const Home = ({ setActiveNav }) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false)
    }, [])

    if (isLoading) return <Preloader />

    return (
        <div id="home">
            <Header />
            <section className="home section">
                <div className="home__container container grid">
                    <div className="home__content grid">

                        <div className="home__img image">
                            <Image
                                priority
                                fill
                                src="/img/ava.jpg"
                                alt="Author photo"
                                sizes="(min-width: 600px) 50vw, 100vw"
                            />
                        </div>

                        <HomeContent />

                    </div>

                </div>
                <div className="container home__line">
                    <HomeSocials />
                    <div className="scroll_down__wrap">
                        <div className="scroll_down">
                            <SlMouse className="scroll_down__icon" />
                            <a
                                onClick={() => setActiveNav("#contact")}
                                href="#contact"
                            >
                                Scroll Down
                            </a>
                            <BsArrowDownShort className="scroll_down__icon" />
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Home;