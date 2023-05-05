import React from "react";
import Hero from "../helpers/Hero";
import img from "../assets/12.jpg";
import Navbar from "../components/Navbar";
import Destination from "../helpers/Destination";
import Trip from "../helpers/Trip";
import Footer from "./Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={img}
        title="Your Journey Your Story"
        text="Choose your Favourite Destination"
        buttonText="Travel plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </div>
  );
}

export default Home;
