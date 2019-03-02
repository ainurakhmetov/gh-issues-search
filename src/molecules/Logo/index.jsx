import React, { Fragment } from 'react';
import styled from 'styled-components';
import img from '../../images/cat.png';

const StyledImg = styled.img`
  width: 150px;
`;
const StyledTitle = styled.p`
  font-family: 'Verdana', sans-serif;
  font-size: 24px;
`;

const Logo = () => (
  <Fragment>
    <StyledImg src={img} />
    <StyledTitle>GitHub Issues</StyledTitle>
  </Fragment>
);

export default Logo;
