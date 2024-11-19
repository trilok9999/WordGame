import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess/Guess";
function GuessResults({ guessList, answer }) {
  return (
    <>
      {range(0, NUM_OF_GUESSES_ALLOWED).map((i) => (
        <Guess answer={answer} key={i} guess={guessList[i]} />
      ))}
    </>
  );
}

export default GuessResults;
