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
function DeckForm({
  initialFormData,
  submitHandler,
  formData,
  setFormData,
  pageIfCancel,
}) {
  //handles the input by keeping track of the input in a useState variable
  const handleInput = (event) => {
    let newFormData = { ...formData, [event.target.name]: event.target.value };
    setFormData(newFormData);
  };

  return (
    <div>
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
                value={formData.name}
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
                value={formData.description}
              ></textarea>
            </div>
          </label>
        </div>
        <Link to={pageIfCancel} className="btn btn-secondary">
          Cancel
        </Link>
        <button onClick={submitHandler} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default DeckForm;
