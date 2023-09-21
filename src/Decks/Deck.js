import React, { useEffect, useState } from "react";
import {
  Link,
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom";
import { deleteCard, deleteDeck, readDeck } from "../utils/api";
import { listDecks } from "../utils/api";
import CardList from "../Cards/CardList";

// DECK SCREEN: displays all the info about a deck
// path is "/decks/:deckId"

function Deck() {
  const { deckId } = useParams();
  const [currDeck, setCurrDeck] = useState([]);
  const history = useHistory();

  //
  const loadDeck = () => {
    readDeck(deckId).then((data) => setCurrDeck(data));
  };

  useEffect(loadDeck, []);

  const deleteHandle = () => {
    const isDeleteConfirmed = window.confirm(
      "Delete this deck? \n\nYou will not be able to recover it."
    );
    if (isDeleteConfirmed) {
      deleteDeck(deckId).then(() => history.push("/"));
    }
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {currDeck.name}
          </li>
        </ol>
      </nav>
      <h1>{currDeck.name}</h1>
      <p>{currDeck.description}</p>
      <Link to={`/decks/${currDeck.id}/edit`} className="btn btn-secondary">
        Edit
      </Link>
      <Link to={`/decks/${currDeck.id}/study`} className="btn btn-primary">
        Study
      </Link>
      <Link to={`/decks/${currDeck.id}/cards/new`} className="btn btn-primary">
        Add Cards
      </Link>
      <button className="btn btn-danger" onClick={deleteHandle}>
        Delete
      </button>
      <CardList deck={currDeck} loadDeck={loadDeck} />
    </div>
  );
}

export default Deck;
