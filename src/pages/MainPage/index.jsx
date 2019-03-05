/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Logo from '../../molecules/Logo';
import SearchModule from '../../molecules/SearchModule';
import CardsList from '../../organisms/CardsList';
import LoadingStatus from '../../molecules/LoadingStatus';

const Wrapper = styled.div`
    background-color: #fff;
    height: 100vh;
    display: flex;
    margin-top: 20px;
    align-items: center;
    flex-direction: column;
`;

const MainPage = ({
  perPage, isLoading, error, data, showForward, page,
}) => (
  <Wrapper>
    <Logo />
    <SearchModule
      defaultValue={perPage}
      showForward={showForward}
      page={page}
    />
    <LoadingStatus
      isLoading={isLoading}
      error={error}
    />
    <CardsList
      data={data}
    />
  </Wrapper>
);

const mapStateToProps = state => ({
  data: state.fetch.data,
  isLoading: state.fetch.isLoading,
  error: state.fetch.error,
  perPage: state.fetch.perPage,
  showForward: state.fetch.showForward,
  page: state.fetch.page,
});

export default connect(
  mapStateToProps,
)(MainPage);

MainPage.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
  perPage: PropTypes.number,
  showForward: PropTypes.bool,
  page: PropTypes.number,
};

MainPage.defaultProps = {
  data: [],
  isLoading: false,
  error: false,
  perPage: 5,
  showForward: false,
  page: 1,
};
