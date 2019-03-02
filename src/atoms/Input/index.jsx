import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
   padding: 10px 20px;
   border-radius: 15px;
   outline: none;
   width: 200px;
   font-size: 16px;
   background-color: #fff;
   border: 3px solid #656c74;
   color: #000;
   &:focus {
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
   }
   @media (max-width: 390px) {
    width: 150px;
  }
`;

const Input = ({ handleChange }) => (
  <StyledInput
    onChange={handleChange}
    placeholder="search..."
  />
);

Input.propTypes = {
  handleChange: PropTypes.func,
};

Input.defaultProps = {
  handleChange: undefined,
};

export default Input;
