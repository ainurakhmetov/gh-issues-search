import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Span = styled.span`
  margin: 0 25px;
  display: inline-block;
`;

const PagerWrapper = styled.div`
  margin: 15px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledButton = styled.button`
  margin: 0 10px;
`;

const Pager = ({
  pageNum, showForward, goForward, goBack,
}) => {
  const showBack = pageNum > 1;
  return (
    <PagerWrapper>
      { showBack
        ? <StyledButton onClick={goBack}>&larr;</StyledButton>
        : <Span /> }
      {pageNum}
      { showForward
        ? <StyledButton onClick={goForward}>&rarr;</StyledButton>
        : <Span /> }
    </PagerWrapper>
  );
};

Pager.propTypes = {
  pageNum: PropTypes.number,
  showForward: PropTypes.bool,
  goForward: PropTypes.func,
  goBack: PropTypes.func,
};

Pager.defaultProps = {
  pageNum: 5,
  showForward: false,
  goForward: undefined,
  goBack: undefined,
};

export default Pager;
