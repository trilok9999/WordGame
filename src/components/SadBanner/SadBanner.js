import React from 'react';
import Banner from '../Banner/Banner';

function SadBanner({answer, reset}) {
  return (
    <Banner status="sad">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        <button onClick={reset}>Restart</button>
    </Banner>
  );
}

export default SadBanner;
