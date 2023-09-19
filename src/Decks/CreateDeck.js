import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../App.css";
import { createDeck } from "../utils/api";

// CREATE DECK SCREEN
// path is "/decks/new"

//TODO: ✅Create a submit handler
//TODO: ✅Call function in index.js in APIs to create new deck
//TODO:✅Direct User to the deck screen of their new study deck

//TODO: ✅Create useState varialbe to keep track of the form input
function CreateDeck() {
  const history = useHistory();
  let initialFormData = {
    name: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  //handles the input by keeping track of the input in a useState variable
  const handleInput = (event) => {
    let newFormData = { ...formData, [event.target.name]: event.target.value };
    setFormData(newFormData);
  };

  //handles the submit by:
  //1. validating the form
  //2. creating the deck
  //3. sending user to the deck screen of the new deck
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

  //Helper function for validateForm to check if anything exists in the input
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
      <form>
        <div>
          <label htmlFor="name">
            Name
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Deck Name"
                onChange={handleInput}
                required
              ></input>
            </div>
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Description
            <div>
              <textarea
                name="description"
                id="description"
                placeholder="Brief description of the deck"
                onChange={handleInput}
                required
              ></textarea>
            </div>
          </label>
        </div>
        <Link to="/" className="btn btn-secondary">
          Cancel
        </Link>
        <button onClick={submitHandler} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateDeck;
