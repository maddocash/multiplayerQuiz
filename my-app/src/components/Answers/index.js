import React from 'react';
import PropTypes from 'prop-types';
import './answers.css';

const Answers = props => {
  const btnText = () => {
    if (
      props.currentQuestion === props.roundLength &&
      props.currentRound === 1
    ) {
      return 'Final Scores';
    }
    if (props.currentQuestion !== props.roundLength) {
      return 'Next Question';
    } else {
      return 'Back to the solar system';
    }
  };
  if (!props.show) {
    return null;
  }
  return (
    <div className="answers modalPosition">
      <div
        className="modal"
        id={
          props.currentAnswer === props.correctAnswer ? 'correct' : 'incorrect'
        }
      >
        <h2 className="answersTitle">Your answer:</h2>
        <h4>{decodeURIComponent(props.currentAnswer)}</h4>
        <h2 className="answersTitle">Correct Answer:</h2>
        <h4>{decodeURIComponent(props.correctAnswer)}</h4>
        <h3 className="btns" onClick={props.questionComplete}>
          {btnText()}
        </h3>
      </div>
    </div>
  );
};

Answers.propTypes = {
  show: PropTypes.bool.isRequired,
  questionComplete: PropTypes.func.isRequired,
  currentAnswer: PropTypes.string.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  currentQuestion: PropTypes.number.isRequired,
  toggleTimerRestart: PropTypes.func.isRequired
};

export default Answers;
