import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import { Link } from "react-router-dom";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "steve jobs",
      url: `https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2014/03/topic_steve_jobs.png?itok=X2pO1JND`,
    },
    {
      name: "mark zuckerberg",
      url: `https://pyxis.nymag.com/v1/imgs/754/a57/171e19dcd8d5703c85ba5d4acf2c28fa62-15-mark-zuckerberg.rsquare.w700.jpg`,
    },
  ]);
  return (
    <div>
      <h1>Tinder Cards</h1>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
