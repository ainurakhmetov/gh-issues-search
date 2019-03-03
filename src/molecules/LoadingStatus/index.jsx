import React from 'react';
import PropTypes from 'prop-types';

const LoadingStatus = ({ isLoading, error }) => (
  <div>
    {isLoading && <p>Loading...</p>}
    {error && (
      <div>
        <p>Download error</p>
      </div>
    )}
  </div>
);

LoadingStatus.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
};

LoadingStatus.defaultProps = {
  error: false,
  isLoading: false,
};

export default LoadingStatus;
