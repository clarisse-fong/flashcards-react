import React, { useEffect, useState } from "react";
import DeckView from "./DeckView";
import CreateDeck from "./CreateDeck";
import { createDeck, deleteDeck, listDecks } from "../utils/api";
import { Route, Switch, Link } from "react-router-dom";

//DeckList takes the list of decks and maps it onto the page using the DeckView component

//TODO: make loading work for mass deletes
function DeckList() {
  //✅TODO: Create a variable to save the list of decks

  //✅TODO: Load the decks using the listOfDecks function in utils/index.js
  const [listOfDecks, setListOfDecks] = useState([]);

  const doListDecks = () => {
    setListOfDecks([]);
    listDecks().then((data) => setListOfDecks(data));
  };

  function deleteHandle(deckId) {
    const isDeleteConfirmed = window.confirm(
      "Delete this deck? \n\nYou will not be able to recover it."
    );

    //TODO: Create functionality where if the delete is confirmed, then
    //✅1) call deleteDeck and
    //✅2) re-render the page so that the deleted Deck doesn't show anymore
    if (isDeleteConfirmed) {
      deleteDeck(deckId).then(() => doListDecks());
    }
  }

  useEffect(doListDecks, []);

  if (listOfDecks.length !== 0) {
    return (
      <div>
        {/* //✅TODO: Create a Create Deck Button: directs user to CREATE DECK SCREEN */}
        {/* //✅TODO: Implement Create Deck button functionality */}
        <Link to="decks/new" className="btn btn-secondary">
          + Create Deck
        </Link>
        {/* //✅TODO: Map over the decks, calling DeckView on each deck */}
        {listOfDecks.length !== 0 &&
          listOfDecks.map((deck) => {
            return (
              <DeckView
                deck={deck}
                key={deck.name}
                deleteHandle={(deckId) => deleteHandle(deckId)}
              />
            );
          })}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
}

export default DeckList;
