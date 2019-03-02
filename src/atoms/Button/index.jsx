import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background-color: #656c74;
  color: #fff;
  border: none;
  margin-left: 10px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 15px;
  width: 120px;
  outline: none;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  &:hover {
    background-color: #83898f;
  }
   &:active {
    background-color: #656c74;
    box-shadow: none;
  }
  @media (max-width: 390px) {
    padding: 10px 0;
    width: 80px;
    margin-left: 5px;
  }
`;

const Button = ({ handleClick }) => (
  <StyledButton
    onClick={handleClick}
  >
    Search
  </StyledButton>
);

export default Button;

Button.propTypes = {
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  handleClick: undefined,
};
