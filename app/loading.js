// app/Loader.js
"use client"; // Indicate this is a client component

import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the letter animation
const letterAnimation = keyframes`
  0% {
    font-size: 30px;
  }
  50% {
    font-size: 40px;
  }
  100% {
    font-size: 30px;
  }
`;

// Styled component for the loader
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
`;

const Text = styled.p`
  color: black;
  font-weight: bolder;
  display: flex;
`;

const Letter = styled.span`
  animation: ${letterAnimation} 1s infinite;
`;

// Individual letter styles with different animation delays
const Letter1 = styled(Letter)`animation-delay: 0s;`;
const Letter2 = styled(Letter)`animation-delay: -0.9s;`;
const Letter3 = styled(Letter)`animation-delay: -0.8s;`;
const Letter4 = styled(Letter)`animation-delay: -0.7s;`;
const Letter5 = styled(Letter)`animation-delay: -0.6s;`;
const Letter6 = styled(Letter)`animation-delay: -0.5s;`;
const Letter7 = styled(Letter)`animation-delay: -0.4s;`;
const Letter8 = styled(Letter)`animation-delay: -0.3s;`;
const Letter9 = styled(Letter)`animation-delay: -0.2s;`;
const Letter10 = styled(Letter)`animation-delay: -0.1s;`;
const Letter11 = styled(Letter)`animation-delay: 0.1s;`; // For space
const Letter12 = styled(Letter)`animation-delay: 0.2s;`;
const Letter13 = styled(Letter)`animation-delay: 0.3s;`;
const Letter14 = styled(Letter)`animation-delay: 0.4s;`;
const Letter15 = styled(Letter)`animation-delay: 0.5s;`;

// Loader component
const Loader = () => {
  return (
    <LoaderWrapper>
      <Text>
        <Letter1>B</Letter1>
        <Letter2>U</Letter2>
        <Letter3>G</Letter3>
        <Letter4> </Letter4>
        <Letter5>B</Letter5>
        <Letter6>l</Letter6>
        <Letter7>i</Letter7>
        <Letter8>t</Letter8>
        <Letter9>z</Letter9>
        <Letter10> </Letter10>
        <Letter11>V</Letter11>
        <Letter12>j</Letter12>
        <Letter13> </Letter13>
        <Letter14>i</Letter14>
        <Letter15>t</Letter15>
      </Text>
    </LoaderWrapper>
  );
};

export default Loader;