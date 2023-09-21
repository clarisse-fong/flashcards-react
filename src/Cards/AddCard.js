import React, { useEffect, useState } from "react";
import CardForm from "./CardForm";
import { createCard, readDeck } from "../utils/api";
import {
  Link,
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

//ADD CARD SCREEN: allows user to add a new card
//path is "/decks/:deckId/cards/new"

function AddCard() {
  const { deckId } = useParams();
  const [currDeck, setCurrDeck] = useState([]);
  const initialFormData = {
    front: "",
    back: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const history = useHistory();

  const loadDeck = () => {
    readDeck(deckId).then((deck) => setCurrDeck(deck));
  };

  useEffect(loadDeck, []);

  //if user selects done(gray btn): make no edits and take user back to the deck screen
  const doneHandler = () => {
    history.push(`/decks/${deckId}`);
  };

  const validateExists = (value) => {
    return value && value.trim();
  };

  //Validates that the form is not empty
  const validateForm = (formData) => {
    const errors = {};

    //Checks if name was entered
    if (!validateExists(formData["front"])) {
      errors.front = "Please enter a front description";
    }

    //Checks if description was entered
    if (!validateExists(formData["back"])) {
      errors.back = "Please enter a back description.";
    }
    return errors;
  };

  //if user selects save(blue btn):
  //1. create new card
  //2. form is cleared
  //3. process for adding cards restarted
  const saveHandler = () => {
    const errors = validateForm(formData);

    //informs user if there are fields that don't have the required info
    if (Object.keys(errors).length > 0) {
      //Displays any errors
      Object.keys(errors).forEach((key) => {
        //Find the specific error element
        alert(errors[key]);
      });
      return false;
    }

    //creates card
    createCard(deckId, formData);

    //resets the process for adding cards
    setFormData(initialFormData);
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
            Add Card
          </li>
        </ol>
      </nav>
      <h1>{currDeck.name}: Add Card</h1>
      <CardForm
        grayBtnName={"Done"}
        grayBtnHandler={doneHandler}
        blueBtnName={"Save"}
        blueBtnHandler={saveHandler}
        placeholderFront={"Front side of card"}
        placeholderBack={"Back side of card"}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}

export default AddCard;
