# Study Tool Application

## Live Links
You can find the deployed frontend [here](https://flashcards-ll46.onrender.com/).

## About
I created a flashcards application where teachers can use this applicaiton to create decks of flashcards for the subjects they teach, and students can study the decks. 

The project required the following technologies: 
* JavaScript
* React for rendering and state management
* Bootstrap, HTML, and CSS for styling
* Progress/Versions tracked with Git

You can find the original assignment here [Thinkful-Ed/flash-card-project-react-18](https://github.com/Thinkful-Ed/flash-card-project-react-18)

## Client Descriptions

### Home
The Home screen is the first page the user sees. It is displayed at `/`.

![Home screen](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/8ad6e17b7d849280a619e4bb69c26baa-home.png)

The Home screen has the following features:

* A **Create Deck** button is shown, and clicking it brings the user to the Create Deck screen.
* Existing decks are each shown with the deck name, the number of cards, and a **Study**, **View**, and **Delete** button.
* Clicking the **Study** button brings the user to the Study screen.
* Clicking the **View** button brings the user to the Deck screen.
* Clicking the **Delete** button shows a warning message before deleting the deck.

### Study

The Study screen is displayed at `/decks/:deckId/study`.

![Study first card](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/e5adaf57aef5e38f4dcd8e7efd0a5dc9-study-first-card.png)

The Study screen has the following features:
- The deck title (i.e., "Study: Rendering in React" ) is shown on the screen.
- Cards are shown one at a time, front-side first.
- A button at the bottom of each card "flips" it to the other side.
- After flipping the card, the screen shows a **Next** button (see the **Next** button section below) to continue to the next card.
- After the final card in the deck has been shown, a message (see the **Restart prompt** section below) is shown offering the user the opportunity to restart the deck.
  - If the user does not restart the deck, they should return to the home screen.
- Studying a deck with two or fewer cards should display a "Not enough cards" message (see the "Not enough cards" section below) and a button to add cards to the deck.

### Create Deck

The Home screen has a **Create Deck** button that brings the user to the Create Deck screen.

![Create Deck](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/c5806a5777aa468623767d8fa4fa8fe8-deck-create.png)

The Create Deck screen has the following features:
- A form is shown with the appropriate fields for creating a new deck.
  - The `name` field is an `<input>` field of type `text`.
  - The `description` field is a `<textarea>` field that can be multiple lines of text.
- If the user clicks **Submit**, the user is taken to the Deck screen.
- If the user clicks **Cancel**, the user is taken to the Home screen.

### Deck

The Deck screen displays all of the information about a deck.

![Deck](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/f63b8bedaaf37cd8c3245febe6f0275f-deck.png)

The Deck screen has the following features:
- The screen includes the deck name (e.g., "React Router") and deck description (e.g., "React Router is a collection of navigational components that compose declaratively in your application"). 
- The screen includes **Edit**, **Study**, **Add Cards**, and **Delete** buttons. Each button takes the user to a different destination, as follows:

### Edit Deck

The Edit Deck screen allows the user to modify information on an existing deck.


![Edit Deck](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/6c34e4b94ba7e983719eda4aa6f60592-deck-edit.png)

The Edit Deck screen has the following features:
- It displays the same form as the Create Deck screen, except it is prefilled with information for the existing deck.
- The user can edit and update the form.
- If the user clicks **Cancel**, the user is taken to the Deck screen.

### Add Card

The Add Card screen allows the user to add a new card to an existing deck.

![Add Card](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/fcc7dde129ed17b6ee199313e1dbc542-card-add.png)

The Add Card screen has the following features:
- The screen displays the *React Router: Add Card* deck title.
- A form is shown with the "front" and "back" fields for a new card. Both fields use a `<textarea>` tag that can accommodate multiple lines of text.
- If the user clicks **Save**, a new card is created and associated with the relevant deck. Then the form is cleared and the process for adding a card is restarted.
- If the user clicks **Done**, the user is taken to the Deck screen.

### Edit Card

![Edit Card](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/cd6a1f07574bf8544b0a30d45020a274-card-edit.png)

The Edit Card screen allows the user to modify information on an existing card.
- It displays the same form as the Add Card screen, except it is prefilled with information for the existing card. It can be edited and updated.
- If the user clicks on either **Save** or **Cancel**, the user is taken to the Deck screen.

## Screens
| Screen | Path | Description |
| ------| -------------------------------------- | -----------------------------------------------|
| Home | `/` | Shows a list of decks with options to create, study, view, or delete a deck |
| Study | `/decks/:deckId/study`| Allows the user to study the cards from a specified deck |
| Create Deck | `/decks/new` | Allows the user to create a new deck | 
| Deck | `/decks/:deckId` | Shows all of the information about a specified deck with options to edit or add cards to the deck, navigate to the study screen, or delete the deck |
| Edit Deck | `/decks/:deckId/edit` | Allows the user to modify information on an existing deck
| Add Card | `/decks/:deckId/cards/new` | Allows the user to add a new card to an existing deck
| Edit Card | `/decks/:deckId/cards/:cardId/edit` |  Allows the user to modify information on an existing card
