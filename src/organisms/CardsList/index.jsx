/* eslint-disable react/no-array-index-key, react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import IssueCard from '../../molecules/IssueCard';

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

const CardsList = ({ data }) => (
  <List>
    {data.map((content, i) => <IssueCard key={i} dataId={i} {...content} />)}
  </List>
);

CardsList.propTypes = {
  data: PropTypes.array,
};

CardsList.defaultProps = {
  data: [],
};

export default CardsList;
