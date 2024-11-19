import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({letter, status}) {
  const className = status ? `cell ${status}` : 'cell';
  return <span className={className}>{letter}</span>;
}
function Guess({ numberOfLetters = 5, guess, answer}) {
  const resultFromGuess = checkGuess(guess, answer) || range(numberOfLetters).map(() => ({letter: '', status: ''}));
  return (
    <div className="guess-results">
        <p className="guess">
          {resultFromGuess.map(({letter, status}, index) => (
            <Cell key={index} letter={letter} status={status} />
          ))}
        </p>
    </div>
  );
}

export default Guess;
