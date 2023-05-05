import React from "react";
import Hero from "../helpers/Hero";
import ContactImg from "../assets/2.jpg";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import ContactUs from "../helpers/ContactUs";
function Contact() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Contact;
