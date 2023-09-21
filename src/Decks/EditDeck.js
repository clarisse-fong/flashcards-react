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

//TODO: access the deck object and set it as the initial form info
//TODO: write and pass in onSubmit function: updates deck array, takes you back to deck screen and shows edits after
//TODO: wirte and pass in a cancel function: takes user back to the deck screen

function EditDeck() {
  const { deckId } = useParams();
  const [deckToEdit, setDeckToEdit] = useState([]);
  const [formData, setFormData] = useState({});
  const history = useHistory();

  const loadDeckToEdit = () => {
    readDeck(deckId)
      .then((deck) => {
        setDeckToEdit(deck);
        return deck;
      })
      .then((deck) => {
        setFormData({
          name: deck.name,
          description: deck.description,
        });
      });
  };

  useEffect(loadDeckToEdit, []);

  const submitHandler = (event) => {
    event.preventDefault();
    updateDeck({
      ...deckToEdit,
      name: formData.name,
      description: formData.description,
    }).then(() => history.push(`/decks/${deckId}`));
  };

  if (deckToEdit.id) {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deckId}`}>{deckToEdit.name}</Link>
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
          pageIfCancel={`/decks/${deckId}`}
        />
      </div>
    );
  } else {
    return "Loading...";
  }
}

export default EditDeck;
