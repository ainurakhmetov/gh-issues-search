import React from 'react';
import styled from 'styled-components';
import img from '../../images/inspectocat1.png';

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row;
  align-items: center;
`;
const StyledImg = styled.img`
  display: flex;
  width: 150px;
`;
const StyledTitle = styled.p`
  display: flex;
  font-family: 'Verdana', sans-serif;
  font-size: 24px;
`;

const Title = () => (
  <LogoWrapper>
    <StyledImg src={img} />
    <StyledTitle>Github Issues</StyledTitle>
  </LogoWrapper>
);

export default Title;
