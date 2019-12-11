//Full Deck of cards
import React, { useState, useEffect } from "react";
import Question from "./Question";

const Deck = props => {
  const [state, setState] = useState({
    cards: [
      {
        id: 1,
        question: "who was your mom?",
        answer: "I don't know but I'm sure she's a nice lady"
      },
      {
        id: 2,
        question: "where is Tavas",
        answer: "I don't know but I hope he's ok"
      },
      {
        id: 3,
        question: "what is the airspeed velocity of an unladen swallow?",
        answer: "African or European?"
      }
    ]
  });
  return (
    <section className="deck-container">
      {state.cards.map(card => {
        return <Question key={`questionkey${state.cards.id}`} card={card} />;
      })}
    </section>
  );
};

export default Deck;
