import React, { useState } from "react";
import NotFound from "./NotFound";
import Deck from "../Decks/Deck";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom";
import Header from "./Header";
import Study from "../Study/StudyDeck";
import CreateDeck from "../Decks/CreateDeck";
import Home from "../Home/Home";
import EditDeck from "../Decks/EditDeck";
import AddCard from "../Cards/AddCard";
import EditCard from "../Cards/EditCard";
import { listDecks } from "../utils/api";

//LAYOUT: this page defines all the paths for all the pages throughout the app

function Layout() {
  const [listOfDecks, setListOfDecks] = useState([]);
  const [currDeck, setCurrDeck] = useState([]);

  const doListDecks = () => {
    setListOfDecks([]);
    listDecks().then((data) => setListOfDecks(data));
  };

  return (
    <>
      <Header />
      <div className="container"></div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/decks/:deckId/study">
          <Study currDeck={currDeck} setCurrDeck={setCurrDeck} />
        </Route>
        <Route exact path="/decks/new">
          <CreateDeck />
        </Route>
        <Route exact path="/decks/:deckId">
          <Deck currDeck={currDeck} setCurrDeck={setCurrDeck} />
        </Route>
        <Route exact path="/decks/:deckId/edit">
          <EditDeck currDeck={currDeck} setCurrDeck={setCurrDeck} />
        </Route>
        <Route exact path="/decks/:deckId/cards/new">
          <AddCard currDeck={currDeck} setCurrDeck={setCurrDeck} />
        </Route>
        <Route exact path="/decks/:deckId/cards/:cardId/edit">
          <EditCard currDeck={currDeck} setCurrDeck={setCurrDeck} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default Layout;
