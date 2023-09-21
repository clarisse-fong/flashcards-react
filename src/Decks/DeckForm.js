import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

//DECK FORM: Provides a form to either create or edit deck
//child component of CREATE DECK SCREEN and EDIT DECK SCREEN

function DeckForm({ submitHandler, formData, setFormData, pageIfCancel }) {
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
                value={formData.name || ""}
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
                value={formData.description || ""}
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
