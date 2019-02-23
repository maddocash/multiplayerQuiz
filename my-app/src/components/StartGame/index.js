import React from 'react';
import PropTypes from 'prop-types';
import './startGame.css';

const StartGame = props => {
  return (
    <div className="stars">
      <div className="twinkling">
        <div className="startGame">
          <div id="startGameTitle">
            <h1>Space</h1>
            <h4 className="title">The Final Quiz</h4>
          </div>
          <div onClick={props.create} id="create">
            <img
              src="/meteorite3.png"
              className="rock"
              alt="create a game button"
            />
            <h1 className="startBtnText">
              Create<p>Game</p>
            </h1>
          </div>
          <div id="join">
            <img src="/meteorite3.png" className="rock" alt="create button" />
            <h1 onClick={props.join} className="startBtnText">
              Join<p>Game</p>
            </h1>
          </div>
          <img src="/earth2.svg" alt="earth" id="startGameEarth" />
        </div>
      </div>
    </div>
  );
};

StartGame.propTypes = {
  join: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired
};

export default StartGame;
