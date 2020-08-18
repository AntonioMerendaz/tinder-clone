import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./TinderCards.css";
// import { Link } from "react-router-dom";

function TinderCards() {
  const [people, setPeople] = useState([]);

  // Piece of code which runs based on a condition
  // useEffect(() => {
  // This is where the code runs...

  // Everytime the collection changes, give the content of the documents inside snapshot
  //   database
  //     .collection("people")
  //     .onSnapshot(snapshot =>
  //       (setPeople(snapshot.docs.map(doc => doc.data()))
  //     );
  // }, []);

  useEffect(() => {
    database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

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
