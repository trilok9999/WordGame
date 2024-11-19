import React from "react";
const GuessInput = ({ updateGuessList, disableInput }) => {
  const [guess, setGuess] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    updateGuessList(guess);
    setGuess("");
  };
  return (
    <div>
      <form className='guess-input-wrapper' onSubmit={handleSubmit}>
        <label htmlFor="guess">Enter guess:</label>
        <input
          type="text"
          id="guess"
          value={guess}
          disabled={disableInput}
          pattern="[a-zA-Z]{5}"
          minLength={5}
          maxLength={5}
          title="5 letter word"
          onChange={(e) => setGuess(e.target.value.toLocaleUpperCase())}
        />
      </form>
    </div>
  );
};

export default GuessInput;
