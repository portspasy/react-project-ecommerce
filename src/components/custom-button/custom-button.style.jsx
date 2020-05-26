import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: #000;
  color: #fff;
  border: 1px solid transparent;

  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;

const GoogleSignInStyles = css`
  background-color: #4285f4;
  color: #fff;

  &:hover {
    background-color: #357ae8;
    border: 1px solid transparent;
  }
`;

const InvertedButtonStyles = css`
  background-color: #fff;
  color: #000;
  border: 1px solid #000;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) { 
    return GoogleSignInStyles;
  }

  return props.inverted ? InvertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed", sans-serif;
  font-weight: bolder;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  border: 1px solid transparent;

  ${getButtonStyles};
`;
