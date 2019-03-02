import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import IssueCard from '../../molecules/IssueCard';

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardsList = ({ data }) => (
  <List>
    {data.map((content, i) => <IssueCard key={i} {...content} />)}
  </List>
);

CardsList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CardsList;
