import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Guess from "../Guess";
import HappyBanner from "../HappyBanner/HappyBanner";
import SadBanner from "../SadBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");
  function updateGuess(guess) {
    if (guess === answer) {
      setGameStatus("won");
    } else if (guessList.length >= 5) {
      setGameStatus("lost");
    }
    setGuessList((prevGuessList) => [
      ...prevGuessList,
      guess,
    ]);
  }
  return (
    <>
      <GuessResults answer={answer} guessList={guessList} />
      <GuessInput updateGuessList={updateGuess} disableInput={gameStatus !== 'running'} />
      {gameStatus === "won" && <HappyBanner numOfGuesses={guessList.length} />}
      {gameStatus === "lost" &&<SadBanner answer={answer}/>}
    </>
  );
}

export default Game;
