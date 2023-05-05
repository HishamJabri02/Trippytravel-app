import React from "react";
import Hero from "../helpers/Hero";
import AboutImg from "../assets/night.jpg";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import AboutUs from "../helpers/AboutUs";
function About() {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="About" btnClass="hide" />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default About;
