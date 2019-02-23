import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading';
import Chat from '../Chat';
import './lobby.css';

const Lobby = props => {
  let PlayersList = props.players.map((itm, idx) => {
    return (
      <div
        key={idx}
        className="player"
        id="lobbyName"
        style={{ color: itm.color }}
      >
        <h2 className="gameFont">{itm.name}</h2>
        <div
          className="gameFont btns"
          onClick={() => {
            if (props.name === itm.name) {
              props.readyCheck(itm.name);
            }
          }}
        >
          {itm.readyCheck ? 'READY!!!' : 'READY?'}
        </div>
      </div>
    );
  });

  return (
    <div className="stars">
      <div className="twinkling">
        <div className="lobby">
          <h1 className="lobbyText" id="lobbyTitle">
            Room Code: {props.code}
          </h1>
          <h2 id="startText">
            Wait for everyone to ready up, then click start!
          </h2>
          {/* <a
            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
            class="twitter-share-button"
            data-text="Hey, come and join me at"
            data-url="http://www.riskyquizness.tech"
            data-show-count="false"
          >
            Tweet
          </a>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          /> */}
          <div className="playersList">{PlayersList}</div>
          <div
            className="lobbyText btns"
            id="startBtn"
            onClick={() => {
              let check = props.players.filter(itm => !itm.readyCheck);
              if (check[0] == null) {
                props.startQuiz(5, 9, 'start');
              }
            }}
          >
            Start
          </div>
          <Chat
            addNewMessage={props.addNewMessage}
            messages={props.messages}
            name={props.name}
            numMessages={props.numMessages}
            resetNumMessages={props.resetNumMessages}
          />
        </div>
        <Loading showLoading={props.showLoading} />
      </div>
    </div>
  );
};

Lobby.propTypes = {
  showLoading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  startQuiz: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired,
  readyCheck: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired,
  addNewMessage: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired
};

export default Lobby;
