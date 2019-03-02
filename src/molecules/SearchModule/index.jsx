/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import fetchIssues from '../../store/actions/fetchIssues';

const RowWrapper = styled.div`
    flex-direction: row;
`;

class SearchModule extends React.Component {
  render() {
    return (
      <RowWrapper>
        <Input
          // handleChange={}
        />
        <Button
          handleClick={() => this.props.fetchIssues()}
        >
          Search
        </Button>
      </RowWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchIssues: () => {
    dispatch(fetchIssues());
  },
});

SearchModule.propTypes = {
  // data: PropTypes.array,
  fetchIssues: PropTypes.func.isRequired,
};

SearchModule.defaultProps = {
  // data: [],
  //  fetchIssues: undefined,
};

export default connect(
  undefined,
  mapDispatchToProps,
)(SearchModule);
