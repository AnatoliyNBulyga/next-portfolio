"use client";

import {useState} from "react";
import Nav from "@/components/nav/Nav";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Qualification from "@/components/qualification/Qualification";
import Portfolio from "@/components/portfolio/Portfolio";
import Contact from "@/components/contact/Contact";
import Home from "@/components/home/Home";

export default function HomePage() {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <main>
      <Home setActiveNav={setActiveNav} />
      <Nav activeNav={activeNav} setActiveNav={setActiveNav} />
      <About />
      <Experience />
      <Qualification />
      <Portfolio />
      <Contact />
    </main>
  )
}
