import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SpanEmpty = styled.span`
  width: 15px;
  display: inline-block;
`;

const PagerWrapper = styled.div`
  margin: 15px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Pager = ({
  pageNum, showForward, goForward, goBack,
}) => {
  const showBack = pageNum > 1;
  return (
    <PagerWrapper>
      {showBack
        ? <span onClick={goBack}>&larr;</span>
        : <SpanEmpty>&nbsp;</SpanEmpty>
      } {pageNum} { showForward
        ? <span onClick={goForward}>&rarr;</span> : null}
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
