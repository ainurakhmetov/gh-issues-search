/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StyledArticle = styled.article`
  border-radius: 15px;
  padding: 10px 3%;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  margin: 3px 0;
  @media (max-width: 400px) {
    display: block;
    font-size: 12px;
  }
`;

const Body = styled(Link)`
  margin: 10px 3px 0 3px;
  display: flex;
  flex-direction: row;
  font-weight: bold;
  text-decoration: none;
  color: #000;
  &:hover {
    color: #0366d6;
  }
`;

const Data = styled.span`
  color: rgba(0, 0, 0, .6);
  margin: 3px 0;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 400px) {
    margin: 0 auto;
  }
`;

const Avatar = styled.img`
  margin-top: 3px;
  width: 75px;
  border-radius: 45px;
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
  number, title, created_at, user, dataId,
}) => (
  <StyledArticle>
    <Header>
      <User href={user.html_url}>
        {user.login}
        <Avatar src={user.avatar_url} />
      </User>
      <Data>
        {`# ${number} / ${created_at.replace(/[A-Z]/g, ' ')}`}
      </Data>
    </Header>
    <Body to={{ pathname: `/${number}`, state: { stateId: dataId } }}>
      {title}
    </Body>
  </StyledArticle>
);

IssueCard.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string,
  created_at: PropTypes.string,
  user: PropTypes.shape({
    html_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }),
  dataId: PropTypes.number,
};

IssueCard.defaultProps = {
  number: 0,
  title: '',
  created_at: '',
  user: {},
  dataId: 0,
};

export default IssueCard;
