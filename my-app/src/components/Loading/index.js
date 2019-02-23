import React from 'react';
import PropTypes from 'prop-types';
import './loading.css';

const Loading = props => {
  if (!props.showLoading) {
    return null;
  }
  return (
    <div className="loading loadingmodalPosition">
      <div className="loadingmodal">
        <h1>Waiting for rocket to launch......</h1>
      </div>
    </div>
  );
};

Loading.propTypes = {
  showLoading: PropTypes.bool.isRequired
};

export default Loading;
