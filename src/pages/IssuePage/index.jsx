import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
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
  text-decoration: none;
  color: #000;
  &:hover {
    color: #0366d6;
  }
`;

const StyledSpan = styled.span`
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

class IssuePage extends React.Component {
  render() {
    const { data } = this.props;
    const { stateId } = this.props.location.state;
    return (
      <StyledArticle>
        {console.log(data)}
        <Header>
          <User href={data[stateId].user.html_url}>
            {data[stateId].user.login}
            <Avatar src={data[stateId].user.avatar_url} />
          </User>
          <StyledSpan>
            {`# ${data[stateId].number} / ${data[stateId].created_at.replace(/[A-Z]/g, ' ')}`}
          </StyledSpan>
        </Header>
        <Body>
          {data[stateId].title}
        </Body>
        <StyledSpan>
          {`status: ${data[stateId].state}`}
        </StyledSpan>
      </StyledArticle>
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
)(IssuePage);

IssuePage.defaultProps = {
  data: [],
  stateId: 0,
  location: {},
};

IssuePage.propTypes = {
  stateId: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  location: PropTypes.shape({
    state: PropTypes.string.isRequired,
  }),
};
