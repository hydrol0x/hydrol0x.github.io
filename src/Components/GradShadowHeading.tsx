// @ts-nocheck
import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  padding: 0;
  margin: 0;
  font-size:5.5vw;

  @media (max-width: 650px) {
    font-size: 40px;
  }
  
  @media (max-width: 800px) {
    font-size: 5vw; 
  }
  
  @media (min-width: 909px) {
    font-size: 5.5vw;
  }
  
  @media (min-width: 1700px) {
    font-size: 93.5px;
  }
  font-family: 'Caprasimo', serif;
  color:hsl(214, 88%, 9%);
  max-width:60rem;
  letter-spacing: 2px; // helps alleviate problems with very small gaps between shadows
  overflow-wrap:anywhere;

  text-shadow: ${({ length, gradColors }) => {
    length = 1500;
    let textShadow = '';

    for (let i = 1; i <= length; i++) {
      const offset = `${i}px`;
      let color = null;

      if (i < 10) {
        color = gradColors[0];
      } else if (i < 40) {
        color = gradColors[1];
      } else if (i < 90) {
        color = gradColors[2];
      } else if (i < 200) {
        color = gradColors[3];
      } else if (i < 350) {
        color = gradColors[4];
      } else {
        color = gradColors[4];
      }

      textShadow += `1px ${offset} 0 ${color},`;
    }

    return textShadow.slice(0, -1); // Remove the trailing comma
  }};
`;

export const GradShadowHeading = ({ text, gradColors, length }) => {
  return (
    <StyledH1 length={length} gradColors={gradColors}>{text}</StyledH1>
  )
}

export default GradShadowHeading;
