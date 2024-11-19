import React from "react";
import Banner from "../Banner/Banner";

function HappyBanner({numOfGuesses}) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in {' '}
        <strong>{numOfGuesses > 1 ?`${numOfGuesses} guesses` : `${numOfGuesses} guess`}</strong>.
      </p>
    </Banner>
  );
}

export default HappyBanner;
