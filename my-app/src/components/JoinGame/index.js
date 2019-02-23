import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './joinGame.css';
require('dotenv').config();
const config = require('../../config/config');

class JoinGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickName: '',
      roomCode: ''
    };
  }

  _handleInputChange = event => {
    const id = event.target.id;
    this.setState({
      [id]: event.target.value
    });
  };

  render() {
    return (
      <div className="stars">
        <div className="twinkling">
          <div className="joinGame">
            <input
              id="nickName"
              className="inputFields joinInput"
              type="text"
              maxLength="12"
              onChange={this._handleInputChange}
              placeholder="Enter Nickname"
            />
            <input
              id="roomCode"
              className="inputFields joinInput"
              type="text"
              maxLength="4"
              onChange={this._handleInputChange}
              placeholder="Enter Room Code"
            />
            <div
              id="joinBtn"
              className="btns"
              onClick={() => {
                if (this.state.nickName === '' || this.state.roomCode === '') {
                  return alert('Name or room code are missing');
                }
                if (this.state.nickName.match(/[^a-zA-Z\d\s]/)) {
                  return alert('Please use letters and numbers');
                }
                fetch(`${config.portDev}/namecheck/${this.state.nickName}`)
                  .then(res => res.json())
                  .then(data => {
                    data.payload.exists
                      ? alert('Sorry this name is taken! Please pick another!')
                      : this.props.joinLobby(
                          this.props.id,
                          this.state.nickName,
                          this.state.roomCode
                        );
                  })
                  .catch(e => console.log(e));
              }}
            >
              Join
            </div>
          </div>
        </div>
      </div>
    );
  }
}

JoinGame.propTypes = {
  joinLobby: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default JoinGame;
