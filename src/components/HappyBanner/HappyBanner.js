import React from "react";
import Banner from "../Banner/Banner";

function HappyBanner({numOfGuesses, reset}) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{numOfGuesses} guesses</strong>.
      </p>
      <button onClick={reset}>Restart</button>
    </Banner>
  );
}

export default HappyBanner;
