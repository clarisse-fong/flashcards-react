import React from "react";
import { Link, Route } from "react-router-dom";
import DeckScreen from "./Deck";

//DECKVIEW: show the info for each deck in the deck list
//Child component of DeckList

function DeckView({ deck, deleteHandle }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{deck.name}</h5>
        {/* Lists number of cards in top right hand corner */}
        <p className="card-text">{deck.cards.length} cards</p>
        <p className="card-text">{deck.description}</p>
        {/* View button: directs user to the DECK SCREEN */}
        <Link to={`/decks/${deck.id}`} className="btn btn-secondary">
          View
        </Link>
        {/* Study button: directs user to the STUDY SCREEN */}
        <Link to={`/decks/${deck.id}/study`} className="btn btn-primary">
          Study
        </Link>
        {/* Delete button: allows user to delete the deck and re-renders the page */}
        <button
          className="btn btn-danger"
          onClick={() => deleteHandle(deck.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeckView;
