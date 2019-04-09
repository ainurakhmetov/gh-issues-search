/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import fetchIssues from '../../store/actions/fetchIssues';
import changePerPage from '../../store/actions/changePerPage';
import changePage from '../../store/actions/changePage';
import PerPageList from '../../atoms/PerPageList';
import Pager from '../../atoms/Pager';

const RowWrapper = styled.div`
    flex-direction: row;
`;

class SearchModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'facebook/react', perPage: 5, page: 1 };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.changePerPage = this.changePerPage.bind(this);
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleClick = () => {
    this.props.fetchIssues(this.state.value);
  };

  changePerPage = (e) => {
    this.setState({ perPage: e.target.value },
      () => this.props.changePerPage(Number(this.state.perPage)));
  };

  goForward = () => {
    this.setState({ page: this.props.page + 1 },
      () => this.props.changePage(this.state.page));
  };

  goBack = () => {
    this.setState({ page: this.props.page - 1 },
      () => this.props.changePage(this.state.page));
  };

  render() {
    return (
      <RowWrapper>
        <PerPageList
          changePerPage={this.changePerPage}
          perPageDefault={this.props.defaultValue}
        />
        <Input
          handleChange={this.handleChange}
          value={this.state.value}
        />
        <Button
          handleClick={this.handleClick}
        >
          Search
        </Button>
        <Pager
          pageNum={this.props.page}
          showForward={this.props.showForward}
          goBack={this.goBack}
          goForward={this.goForward}
        />
      </RowWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchIssues: (search) => {
    dispatch(fetchIssues(search));
  },
  changePerPage: (perPage) => {
    dispatch(changePerPage(perPage));
  },
  changePage: (pageNum) => {
    dispatch(changePage(pageNum));
  },
});

SearchModule.propTypes = {
  fetchIssues: PropTypes.func.isRequired,
  changePerPage: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
  defaultValue: PropTypes.number,
  showForward: PropTypes.bool,
  page: PropTypes.number,
};

SearchModule.defaultProps = {
  defaultValue: 5,
  showForward: false,
  page: 1,
};

export default connect(
  undefined,
  mapDispatchToProps,
)(SearchModule);
