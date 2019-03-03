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
  constructor(props) {
    super(props);
    this.state = { value: 'developit/preact' };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleClick() {
    this.props.fetchIssues(this.state.value);
  }

  render() {
    return (
      <RowWrapper>
        <Input
          handleChange={this.handleChange}
        />
        <Button
          handleClick={this.handleClick}
        >
          Search
        </Button>
      </RowWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchIssues: (search) => {
    dispatch(fetchIssues(search));
  },
});

SearchModule.propTypes = {
  fetchIssues: PropTypes.func.isRequired,
};

export default connect(
  undefined,
  mapDispatchToProps,
)(SearchModule);
