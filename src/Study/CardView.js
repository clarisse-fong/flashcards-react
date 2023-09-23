import React from "react";

function CardView({
  card,
  currCardIndex,
  handleNext,
  handleFlip,
  deckLength,
  isFront,
}) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            Card {currCardIndex + 1} of {deckLength}
          </h5>
          <p className="card-text">{isFront ? card.front : card.back}</p>
          <button onClick={handleFlip} className="btn btn-secondary">
            Flip
          </button>
          {!isFront && (
            <button className="btn btn-primary" onClick={handleNext}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardView;
