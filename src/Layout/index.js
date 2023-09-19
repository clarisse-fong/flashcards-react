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

// HOME SCREEN: first page the user sees
// path is "/"
// TODO: Create a "Create Deck Button".
// When you click this button it will bring the user to the Create Deck Screen.
//TODO: Create a Route to the Create Deck Sceen using path "/decks/new"

function Layout() {
  const [listOfDecks, setListOfDecks] = useState([]);

  const doListDecks = () => {
    setListOfDecks([]);
    listDecks().then((data) => setListOfDecks(data));
  };

  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}

        {/* <NotFound /> */}
      </div>
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
