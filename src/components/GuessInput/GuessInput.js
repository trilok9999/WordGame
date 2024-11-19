import React from "react";

function GuessInput({updateGuessList}) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    updateGuessList(guess);
    setGuess("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input minLength={5} maxLength={5} pattern={'[A-Za-z]{5}'} id="guess-input" type="text" value={guess} onChange={(event) => setGuess(event.target.value.toUpperCase())} />
    </form>
  );
}

export default GuessInput;
