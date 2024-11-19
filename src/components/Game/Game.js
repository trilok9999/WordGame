import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import HappyBanner from "../HappyBanner/HappyBanner";
import SadBanner from "../SadBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [gamestatus, setGameStatus] = React.useState("running");
  const [guessResults, setGuessResults] = React.useState([]);

  const handleUpdateGuessList = (guess) => {
    if (guess === answer) {
      setGameStatus("won");
    } else if(guessResults.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost")
    }
    setGuessResults((prevGuessResults) => {
      const newGuessResults = [...prevGuessResults, guess];
      return newGuessResults; 
    });
  }

  const handleReset = () => {
    setAnswer(sample(WORDS));
    setGuessResults([]);
    setGameStatus("running");
  }

  return (
    <>
      <GuessResults answer={answer} guessResults={guessResults} />
      <GuessInput disabled={gamestatus !== 'running'} updateGuessList={handleUpdateGuessList} />
      {gamestatus === 'won' && <HappyBanner reset={handleReset} numOfGuesses={guessResults.length} />}
      {gamestatus === 'lost' && <SadBanner reset={handleReset} answer={answer} />}
    </>
  );
}

export default Game;
