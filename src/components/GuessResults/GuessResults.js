import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function GuessResults({guessResults, answer}) {
  return (
    <>
    {range(NUM_OF_GUESSES_ALLOWED).map((_, index) => (
      <Guess key={index} answer={answer} guess={guessResults[index] || ''} />
    ))}
    </>
  );
}

export default GuessResults;
