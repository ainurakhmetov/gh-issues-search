/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledArticle = styled.article`
    display: flex;
    flex-direction: column;
    border-bottom: #e1e4e8 1px solid;
    border-top: #e1e4e8 1px solid;
    padding: 10px 5%;
`;

const HeaderWrapper = styled.div`
    margin: 5px 3px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

const Header = styled.span`
    font-weight: bold;
`;

const IssueCard = ({ number, title, created_at }) => (
  <StyledArticle>
    <HeaderWrapper>
      <Header># {number} / {created_at.replace(/[A-Z]/g, ' ')}</Header>
    </HeaderWrapper>
    {title}
  </StyledArticle>
);

IssueCard.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string,
  created_at: PropTypes.string,
};

IssueCard.defaultProps = {
  number: 0,
  title: '',
  created_at: '',
};

export default IssueCard;
