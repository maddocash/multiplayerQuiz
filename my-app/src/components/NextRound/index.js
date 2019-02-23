import React from 'react';
import PropTypes from 'prop-types';
import './nextRound.css';

const NextRound = props => {
  if (!props.roundControl) {
    return null;
  }
  return (
    <div className="nextRound nextRoundmodalPosition">
      <div className="nextRoundmodal">
        <h1>Waiting for the slow coaches</h1>
      </div>
    </div>
  );
};

NextRound.propTypes = {
  roundControl: PropTypes.bool.isRequired
};

export default NextRound;
