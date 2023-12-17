import React from "react";
import styled from "styled-components";

const Button = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 10px 20px;
  background-color: transparent;
  color: #c5d4c4;
  text-decoration: none;
  border-radius: 4px;
  border: 1px solid black;
  font-weight: bold;
  font-size: 15pt;
  transition: background-color 0.25s, transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  box-shadow: 1px 1px 0px #000814;
  font-family: "Noto Sans", sans-serif;
  font-weight: 200;

  &:hover {
    background-color: rgb(240, 248, 255, 0.2);
    transform: translate(-5%, -5%);
    // box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 5px 5px 0px #000814;
  }
`;

const ContactButton = ({ email }) => {
  const mailToLink = `mailto:${email}`;

  return <Button href={mailToLink}>Contact</Button>;
};

export default ContactButton;
