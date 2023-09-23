import React, { useEffect, useState } from "react";
import DeckForm from "./DeckForm";
import {
  Link,
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { readDeck, updateDeck } from "../utils/api";

//EDIT DECK SCREEN: allows user to modify info on an existing deck
//path is "/decks/:deckId/edit"

function EditDeck({ currDeck, setCurrDeck }) {
  const { deckId } = useParams();
  const [formData, setFormData] = useState({});
  const history = useHistory();

  const loadcurrDeck = () => {
    readDeck(deckId)
      .then((deck) => {
        setCurrDeck(deck);
        return deck;
      })
      .then((deck) => {
        setFormData({
          name: deck.name,
          description: deck.description,
        });
      });
  };

  useEffect(loadcurrDeck, []);

  // onSubmit function: updates deck array, takes user back to deck screen and shows new edits
  const submitHandler = (event) => {
    event.preventDefault();
    updateDeck({
      ...currDeck,
      name: formData.name,
      description: formData.description,
    }).then(() => history.push(`/decks/${deckId}`));
  };

  if (currDeck.id) {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deckId}`}>{currDeck.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Data
            </li>
          </ol>
        </nav>
        <h1>Edit Deck</h1>
        <DeckForm
          formData={formData}
          setFormData={setFormData}
          submitHandler={submitHandler}
          // if users cancels, takes user back to the deck screen
          pageIfCancel={`/decks/${deckId}`}
        />
      </div>
    );
  } else {
    return "Loading...";
  }
}

export default EditDeck;
