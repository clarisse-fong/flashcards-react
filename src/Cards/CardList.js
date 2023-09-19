import React from "react";
import CardView from "./CardView";

function CardList({ deck, loadDeck }) {
  console.log(deck.cards);

  const renderCards = () => {
    console.log(renderCards);

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
