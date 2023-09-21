import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { deleteCard } from "../utils/api";

function CardView({ front, back, deckId, cardId, loadDeck }) {
  const handleDelete = () => {
    const isDeleteConfirmed = window.confirm(
      "Delete this card? \n\nYou will not be able to recover it."
    );
    if (isDeleteConfirmed) {
      deleteCard(cardId).then(() => loadDeck());
    }
  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <p className="card-text">{front}</p>
          <p className="card-text">{back}</p>
          <Link
            to={`/decks/${deckId}/cards/${cardId}/edit`}
            className="btn btn-secondary"
          >
            Edit
          </Link>
          <button onClick={handleDelete} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardView;
