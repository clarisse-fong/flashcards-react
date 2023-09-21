import React from "react";

//CARDFORM: Provides a form to either add or edit a card
//child component of ADD CARD SCREEN and EDIT CARD SCREEN
function CardForm({
  grayBtnName,
  grayBtnHandler,
  blueBtnHandler,
  blueBtnName,
  placeholderFront,
  placeholderBack,
  formData,
  setFormData,
}) {
  const handleInput = (event) => {
    let newFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    setFormData(newFormData);
  };

  if (formData !== null) {
    return (
      <div>
        <form>
          <label htmlFor="front">
            Front
            <textarea
              id="front"
              name="front"
              placeholder={placeholderFront ? placeholderFront : ""}
              onChange={handleInput}
              value={formData.front}
            ></textarea>
          </label>
          <label htmlFor="back">
            Back
            <textarea
              id="back"
              name="back"
              placeholder={placeholderBack ? placeholderBack : ""}
              onChange={handleInput}
              value={formData.back}
            ></textarea>
          </label>
          <button onClick={grayBtnHandler} className="btn btn-secondary">
            {grayBtnName}
          </button>
          <button onClick={blueBtnHandler} className="btn btn-primary">
            {blueBtnName}
          </button>
        </form>
      </div>
    );
  } else {
    return "Loading...";
  }
}

export default CardForm;
