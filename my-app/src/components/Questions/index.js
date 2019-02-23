import React from 'react';
import PropTypes from 'prop-types';
import './question.css';
import Drawer from '../Drawer';
import Answers from '../Answers';
import Timer from '../Timer';

const Questions = props => {
  let answers = props.shuffleAnswer.map((itm, idx) => (
    <div
      key={idx}
      className="btns"
      onClick={() =>
        props.displayScoreBoard(
          props.name,
          itm,
          props.questions.correct_answer,
          props.categoryId,
          5
        )
      }
    >
      {decodeURIComponent(itm)}
    </div>
  ));
  return (
    <div className="stars">
      <div className="twinkling">
        <Drawer results={props.results} />
        <div className="showQuestions">
          <h1 id="ShowQuestionsTitle">
            {decodeURIComponent(props.questions.question)}
          </h1>
          <div id="answers">{answers}</div>
          <img
            id="planetImg"
            src={`/planet${props.categoryIndex}.svg`}
            alt={`planet ${decodeURIComponent(props.questions.category)}`}
          />
        </div>
        <Answers
          show={props.showAnswers}
          questionComplete={props.questionComplete}
          currentAnswer={props.currentAnswer}
          correctAnswer={props.correctAnswer}
          currentQuestion={props.currentQuestion}
          roundLength={props.roundLength}
          currentRound={props.currentRound}
          toggleTimerRestart={props.toggleTimerRestart}
        />
        <Timer
          currentCount={props.currentCount}
          timerRestart={props.timerRestart}
          toggleTimerRestart={props.toggleTimerRestart}
          displayScoreBoard={() =>
            props.displayScoreBoard(
              props.name,
              props.shuffleAnswer[0],
              props.questions.correct_answer,
              props.categoryId,
              5
            )
          }
          questionComplete={props.questionComplete}
        />
      </div>
    </div>
  );
};

Questions.propTypes = {
  displayScoreBoard: PropTypes.func.isRequired,
  questions: PropTypes.object.isRequired,
  currentQuestion: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  categoryId: PropTypes.number.isRequired,
  categoryIndex: PropTypes.number.isRequired,
  results: PropTypes.object.isRequired,
  currentAnswer: PropTypes.string.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  showAnswers: PropTypes.bool.isRequired,
  questionComplete: PropTypes.func.isRequired,
  shuffleAnswer: PropTypes.array.isRequired,
  roundLength: PropTypes.number.isRequired,
  currentRound: PropTypes.number.isRequired,
  currentCount: PropTypes.number.isRequired,
  toggleTimerRestart: PropTypes.func.isRequired,
  timerRestart: PropTypes.bool.isRequired
};

export default Questions;
