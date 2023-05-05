import React from "react";
import Hero from "../helpers/Hero";
import AboutImg from "../assets/night.jpg";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import Trip from "../helpers/Trip";
function Service() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </div>
  );
}

export default Service;
