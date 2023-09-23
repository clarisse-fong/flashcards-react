import React from "react";
import { Link } from "react-router-dom";

function NotEnoughCards({ deck, deckLength }) {
  return (
    <div>
      <h2>Not enough Cards</h2>
      <p>
        You need at least 3 cards to study. There are {deckLength} cards in this
        deck.{" "}
      </p>
      <Link to={`/decks/${deck.id}/cards/new`} className="btn btn-primary">
        + Add Cards
      </Link>
    </div>
  );
}

export default NotEnoughCards;
