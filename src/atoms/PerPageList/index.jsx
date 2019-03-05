import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSelect = styled.select`
  margin-right: 10px;
  font-size: 16px;
  background-color: #656c74;
  color: #fff;
`;

const PerPageList = ({ changePerPage, perPageDefault }) => {
  const numbers = [5, 15, 30, 50].map(
    num => <option key={num}>{num}</option>,
  );
  return (
    <StyledSelect
      onChange={changePerPage}
      defaultValue={perPageDefault}
    >
      {numbers}
    </StyledSelect>
  );
};

PerPageList.propTypes = {
  changePerPage: PropTypes.func,
  perPageDefault: PropTypes.number,
};

PerPageList.defaultProps = {
  changePerPage: undefined,
  perPageDefault: 5,
};


export default PerPageList;
