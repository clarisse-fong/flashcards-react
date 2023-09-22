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
          <Study />
        </Route>
        <Route exact path="/decks/new">
          <CreateDeck />
        </Route>
        <Route exact path="/decks/:deckId">
          <Deck />
        </Route>
        <Route exact path="/decks/:deckId/edit">
          <EditDeck />
        </Route>
        <Route exact path="/decks/:deckId/cards/new">
          <AddCard />
        </Route>
        <Route exact path="/decks/:deckId/cards/:cardId/edit">
          <EditCard />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default Layout;
