import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
function Cell({letter, status}) {
  return <span className={`cell ${status}`}>{letter}</span>;
}
function Guess({guess, totalLetters = 5, answer}) {
  const result = checkGuess(guess, answer);
  return (
    <div className="guess-results">
        <p className="guess">
          {range(totalLetters).map((j) => (
            <Cell key={j} letter={guess && guess[j]} status={result && result[j] ? result[j].status : undefined} />
          ))}
        </p>
    </div>
  );
}

export default Guess;
