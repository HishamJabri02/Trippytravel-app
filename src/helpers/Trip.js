import React from "react";
import "../styles/Trip.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";
const data = [
  {
    id: 1,
    image: Trip1,
    heading: "Trip in Indonesia",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quomagnam minima veritatis exercitationem esse, voluptate repellendusratione iste. Alias, quis? Aliquam neque maxime voluptate a possimusnatus mollitia excepturi?",
  },
  {
    id: 2,
    image: Trip2,
    heading: "Trip in Malaysia",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quomagnam minima veritatis exercitationem esse, voluptate repellendusratione iste. Alias, quis? Aliquam neque maxime voluptate a possimusnatus mollitia excepturi?",
  },
  {
    id: 3,
    image: Trip3,
    heading: "Trip in France",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quomagnam minima veritatis exercitationem esse, voluptate repellendusratione iste. Alias, quis? Aliquam neque maxime voluptate a possimusnatus mollitia excepturi?",
  },
];
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trip</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripCard">
        {data.map((tData) => (
          <TripData
            Key={tData.id}
            image={tData.image}
            heading={tData.heading}
            text={tData.text}
          />
        ))}
      </div>
    </div>
  );
}

export default Trip;
