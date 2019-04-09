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
   @media (max-width: 430px) {
    width: 150px;
    font-size: 12px;
  }
`;

const Input = ({ handleChange, value }) => (
  <StyledInput
    onChange={handleChange}
    placeholder="username/repository"
    value={value}
  />
);

Input.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
};

Input.defaultProps = {
  handleChange: undefined,
  value: '',
};

export default Input;
