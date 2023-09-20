import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import DeckForm from "./DeckForm";
import { createDeck } from "../utils/api";

//TODO: create and pass in a cancelHandler function: takes user back to the home screen

function CreateDeck() {
  const history = useHistory();
  let initialFormData = {
    name: "",
    description: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const validateExists = (value) => {
    return value && value.trim();
  };

  //Validates that the form is not empty
  const validateForm = (formData) => {
    const errors = {};

    //Checks if name was entered
    if (!validateExists(formData["name"])) {
      errors.name = "Please enter a name";
    }

    //Checks if description was entered
    if (!validateExists(formData["description"])) {
      errors.description = "Please enter a short description.";
    }
    return errors;
  };

  //handles the submit by:
  //1. validating the form
  //2. creating the deck
  //3. sending user to the deck screen of the new deck
  //Helper function for validateForm to check if anything exists in the input
  const submitHandler = (event) => {
    event.preventDefault();

    //resets old errors
    let errors = {};
    errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      //Displays any errors
      Object.keys(errors).forEach((key) => {
        //Find the specific error element
        alert(errors[key]);
      });
      return false;
    }

    createDeck(formData)
      .then((deck) => deck.id)
      .then((deckId) => history.push(`/decks/${deckId}`));
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
      <h1>Create Deck</h1>
      <DeckForm
        initialFormData={initialFormData}
        submitHandler={submitHandler}
        setFormData={setFormData}
        formData={formData}
        pageIfCancel={"/"}
      />
    </div>
  );
}

export default CreateDeck;
