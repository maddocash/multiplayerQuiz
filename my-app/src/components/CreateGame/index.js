import React from 'react';
import PropTypes from 'prop-types';
import './createGame.css';
require('dotenv').config();
const config = require('../../config/config');

const CreateGame = props => {
  let roomCode = (((1 + Math.random()) * 0x10000) | 0)
    .toString(16)
    .substring(1)
    .toLowerCase();
  //shortid
  return (
    <div className="stars">
      <div className="twinkling">
        <div className="createGame">
          <h1 id="code">Room Code:{roomCode}</h1>
          <input
            type="text"
            maxLength="12"
            className="inputFields"
            id="test"
            placeholder="Enter your nickname"
          />
          <div
            id="createBtn"
            className="btns"
            onClick={() => {
              if (test.value.trim() === '') {
                return alert('Please enter a name');
              }
              if (test.value.match(/[^a-zA-Z\d\s]/)) {
                return alert('Please only use letters and numbers');
              }
              fetch(`${config.portDev}/namecheck/${test.value}`)
                .then(res => res.json())
                .then(data => {
                  data.payload.exists
                    ? alert('Sorry this name is taken! Please pick another!')
                    : props.joinLobby(props.id, test.value, roomCode);
                })
                .catch(e => console.log(e));
            }}
          >
            Create Game
          </div>
        </div>
      </div>
    </div>
  );
};

CreateGame.propTypes = {
  joinLobby: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default CreateGame;
