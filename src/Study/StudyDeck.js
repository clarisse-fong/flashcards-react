import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CardView from "./CardView";
import { readDeck } from "../utils/api";
import NotEnoughCards from "./NotEnoughCards";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// STUDY SCREEN
// path is "/decks/:deckId/study"
function Study() {
  const { deckId } = useParams();
  const [deckToStudy, setDeckToStudy] = useState([]);
  const [currCardIndex, setCurrCardIndex] = useState(0);
  const [isFront, setisFront] = useState(true);
  const history = useHistory();

  const useReadDeck = () => {
    if (deckToStudy) {
      readDeck(deckId).then((data) => {
        setDeckToStudy(data);
      });
    }
  };
  useEffect(useReadDeck, []);

  //checks if its the last card in the deck
  //if so, a dialog will pop up to ask if the user would like to restart studying the deck or return to the home page.
  //if not, makes the next card in the deck appear
  const handleNext = () => {
    if (currCardIndex === deckToStudy.cards.length - 1) {
      const restart = window.confirm(
        "Restart cards \n\nClick 'cancel' to return to the home page."
      );
      if (restart) {
        setCurrCardIndex(0);
      } else {
        history.push("/");
      }
      //if not last card in the deck, then increase the card index and flip the card.
    } else {
      setisFront(!isFront);
      setCurrCardIndex(currCardIndex + 1);
    }
  };

  //flips card from front to back or vice versa
  const handleFlip = () => {
    setisFront(!isFront);
  };

  const renderCard = () => {
    const deckLength = deckToStudy.cards.length;

    //checks if there are at least 2 cards
    const display =
      deckToStudy.cards.length <= 2 ? (
        <NotEnoughCards deckLength={deckLength} />
      ) : (
        <CardView
          card={deckToStudy.cards[currCardIndex]}
          currCardIndex={currCardIndex}
          deckLength={deckLength}
          handleNext={handleNext}
          handleFlip={handleFlip}
          isFront={isFront}
        />
      );

    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deckToStudy.id}`}>{deckToStudy.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Study
            </li>
          </ol>
        </nav>
        <h1>Study: {deckToStudy.name}</h1>
        {display}
      </div>
    );
  };

  if (deckToStudy && deckToStudy.cards) {
    return renderCard();
  } else {
    return "Loading...";
  }
}

export default Study;
