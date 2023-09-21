import React, { useEffect, useState } from "react";
import CardForm from "./CardForm";
import {
  Link,
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { readCard, readDeck, updateCard } from "../utils/api";

//EDIT CARD SCREEN: allows user to edit an existing card
//path: "/decks/:deckId/cards/:cardId/edit"
function EditCard() {
  const { deckId, cardId } = useParams();
  const history = useHistory();
  const initialFormData = {
    front: "",
    back: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [currDeck, setCurrDeck] = useState([]);

  const loadDeck = () => {
    readDeck(deckId).then((deck) => setCurrDeck(deck));
  };

  useEffect(loadDeck, []);

  const loadCard = () => {
    if (cardId) {
      readCard(cardId).then((card) =>
        setFormData({ front: card.front, back: card.back })
      );
    }
  };

  useEffect(loadCard, []);

  //if user selects cancel btn(gray):take user back to deck screen
  const cancelHandler = () => {
    history.push(`/decks/${deckId}`);
  };

  //if user selects submit btn(blue):
  //1. update content
  //2. take user back to deck screen
  const submitHandler = (event) => {
    event.preventDefault();
    const newCard = {
      ...formData,
      id: cardId,
      deckId: Number(deckId),
    };
    updateCard(newCard)
      .then(() => {
        setFormData(initialFormData);
      })
      .then(() => history.push(`/decks/${deckId}`));
  };

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
            Edit Card {cardId}
          </li>
        </ol>
      </nav>
      <h1>Edit Card</h1>
      <CardForm
        grayBtnName={"Cancel"}
        blueBtnName={"Submit"}
        formData={formData}
        setFormData={setFormData}
        grayBtnHandler={cancelHandler}
        blueBtnHandler={submitHandler}
      />
    </div>
  );
}

export default EditCard;
