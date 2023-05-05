import React from "react";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import "../styles/Destination.css";
import DestinationData from "./DestinationData";
function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunnity to see a lot, within a time frame</p>
      <DestinationData
        className="first-des"
        heading="Taal volcano ,Batanges"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quo
          magnam minima veritatis exercitationem esse, voluptate repellendus
          ratione iste. Alias, quis? Aliquam neque maxime voluptate a possimus
          natus mollitia excepturi?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nam quo magnam minima veritatis exercitationem esse"
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Taal volcano ,Batanges"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quo
          magnam minima veritatis exercitationem esse, voluptate repellendus
          ratione iste. Alias, quis? Aliquam neque maxime voluptate a possimus
          natus mollitia excepturi?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nam quo magnam minima veritatis exercitationem esse"
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
}

export default Destination;
