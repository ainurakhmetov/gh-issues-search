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

class MainPage extends React.Component {
  render() {
    return (
      <Wrapper>
        <Logo />
        <SearchModule />
        <LoadingStatus
          isLoading={this.props.isLoading}
          error={this.props.error}
        />
        <CardsList
          data={this.props.data}
        />
      </Wrapper>
    );
  }
}
const mapStateToProps = state => ({
  data: state.fetch.data,
  isLoading: state.fetch.isLoading,
  error: state.fetch.error,
});

export default connect(
  mapStateToProps,
)(MainPage);

MainPage.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
};

MainPage.defaultProps = {
  data: [],
  isLoading: false,
  error: false,
};
