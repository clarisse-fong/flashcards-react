import React, { useEffect, useState } from "react";
import DeckView from "./DeckView";
import CreateDeck from "./CreateDeck";
import { createDeck, deleteDeck, listDecks } from "../utils/api";
import { Route, Switch, Link } from "react-router-dom";

//DECKLIST: takes the list of decks and maps it onto the page using the DeckView component
//child component of HOME SCREEN

function DeckList() {
  //Create a variable to save the list of decks
  const [listOfDecks, setListOfDecks] = useState([]);

  //Load the decks using the listOfDecks function in utils/index.js
  const doListDecks = () => {
    setListOfDecks([]);
    listDecks().then((data) => setListOfDecks(data));
  };

  //if user selects delete, shows dialog confirming user wants to delete the deck
  function deleteHandle(deckId) {
    const isDeleteConfirmed = window.confirm(
      "Delete this deck? \n\nYou will not be able to recover it."
    );

    //if the delete is confirmed, then
    //1) call deleteDeck and
    //2) re-render the page so that the deleted Deck doesn't show anymore
    if (isDeleteConfirmed) {
      deleteDeck(deckId).then(() => doListDecks());
    }
  }

  useEffect(doListDecks, []);

  if (listOfDecks.length !== 0) {
    return (
      <div>
        {/* Create Deck Button: directs user to CREATE DECK SCREEN */}
        <Link to="decks/new" className="btn btn-secondary">
          + Create Deck
        </Link>
        {/* Map over the decks, calling DeckView on each deck */}
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
