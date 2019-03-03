/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledArticle = styled.article`
  border-radius: 15px;
  padding: 10px 3%;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  margin: 3px 0;
  @media (max-width: 400px) {
    display: block;
  }
`;

const Body = styled.div`
  margin: 10px 3px 0 3px;
  display: flex;
  flex-direction: row;
  font-weight: bold;
`;

const Date = styled.span`
  color: rgba(0, 0, 0, .6);
  margin: 3px 0;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 400px) {
    display: block;
    margin: 0 auto;
  }
`;

const Avatar = styled.img`
  width: 75px;
  @media (max-width: 400px) {
    width: 75px;
  }
`;

const User = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #000;
  &:hover {
    text-decoration: underline;
  }
`;

const IssueCard = ({
  number, title, created_at, user,
}) => (
  <StyledArticle>
    <Header>
      <User href={user.html_url}>
        {user.login}
        <Avatar src={user.avatar_url} />
      </User>
      <Date>
        {`# ${number} / ${created_at.replace(/[A-Z]/g, ' ')}`}
      </Date>
    </Header>
    <Body>
      {title}
    </Body>
  </StyledArticle>
);

IssueCard.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string,
  created_at: PropTypes.string,
  user: PropTypes.object,
};

IssueCard.defaultProps = {
  number: 0,
  title: '',
  created_at: '',
  user: {},
};

export default IssueCard;
