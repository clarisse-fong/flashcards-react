import React, { useEffect } from "react";
import CardView from "./CardView";

//child component of Deck screen that lists the card of a given deck
function CardList({ deck, loadDeck }) {
  const renderCards = () => {
    return (
      <div>
        <h1>Cards</h1>
        {deck.cards.map((card) => {
          return (
            <CardView
              front={card.front}
              back={card.back}
              cardId={card.id}
              deckId={deck.id}
              loadDeck={loadDeck}
              key={card.id}
            />
          );
        })}
      </div>
    );
  };

  if (deck.id && deck.cards.length != 0) {
    return renderCards();
  } else {
    return <div></div>;
  }
}

export default CardList;
