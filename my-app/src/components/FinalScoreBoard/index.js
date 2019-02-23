import React from 'react';
import PropTypes from 'prop-types';
import Chat from '../Chat';
import ResultTable from '../ResultTable';
import './finalScoreBoard.css';

const FinalScoreBoard = props => (
  <div className="pyroContainer">
    <div className="pyro">
      <div className="before" />
      <div className="after" />
      <div className="finalScoreBoard">
        <ResultTable players={props.results} />
        <div id="finalBtns" className="btns" onClick={props.reset}>
          Blast Off Again?
        </div>
        <Chat
          addNewMessage={props.addNewMessage}
          messages={props.messages}
          name={props.name}
          numMessages={props.numMessages}
          resetNumMessages={props.resetNumMessages}
        />
      </div>
    </div>
  </div>
);

FinalScoreBoard.propTypes = {
  results: PropTypes.object.isRequired,
  reset: PropTypes.func.isRequired,
  addNewMessage: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};

export default FinalScoreBoard;
