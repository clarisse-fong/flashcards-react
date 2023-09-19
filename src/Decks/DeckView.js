import React from "react";
import { Link, Route } from "react-router-dom";
import DeckScreen from "./Deck";

//✅TODO: Create a View button: directs user to the DECK SCREEN
//✅TODO: Implement button functionality

//✅TODO: Create a a Study button: directs user to the STUDY SCREEN
//✅TODO: Implement button functionality

//✅TODO: Create a delete button: creates
//TODO: Implement button functionality

//✅TODO: Lists number of cards in top right hand corner

//TODO: Implement icons for the buttons (plus, trash, study, view)
//TODO: Check if bootstrap has icons or use google icons

//✅TODO: Implment Delete Handle

function DeckView({ deck, deleteHandle }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{deck.name}</h5>
        <p className="card-text">{deck.cards.length} cards</p>
        <p className="card-text">{deck.description}</p>

        <Link to={`/decks/${deck.id}`} className="btn btn-secondary">
          View
        </Link>
        <Link to={`/decks/${deck.id}/study`} className="btn btn-primary">
          Study
        </Link>
        <Route path="/decks/deckId">
          <DeckScreen />
        </Route>
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
