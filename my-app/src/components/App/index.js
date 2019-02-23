import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Questions from '../Questions';
import FinalScoreBoard from '../FinalScoreBoard';
import StartGame from '../StartGame';
import CreateGame from '../CreateGame';
import JoinGame from '../JoinGame';
import SolarSystem from '../SolarSystem';
import Lobby from '../Lobby';

import * as actions from '../../actions';
import * as selectors from '../../selectors';

let code = '';

class App extends Component {
  componentDidMount() {
    this.props.socket.on('setName', id => {
      this.props.setName(id);
    });
    this.props.socket.on('players', playersArr => {
      this.props.addPlayers(playersArr);
    });
    this.props.socket.on('sharedAction', action => {
      this.props.sharedAction(action);
    });
    this.props.socket.on('restartQuiz', data => {
      this.props.restartQuiz(data);
    });
  }

  render() {
    const {
      chosenCategory,
      showScoreBoard,
      showFinalScoreBoard,
      toggleTimerRestart,
      showStart,
      showCreate,
      showJoin,
      showLobby,
      showLoading,
      categories,
      currentQuestion,
      questions,
      players,
      name,
      resultsMap,
      planetResultsMap,
      shuffleAnswer,
      roundControl,
      currentCount,
      messages,
      timerRestart,
      fetchData,
      displayCreate,
      displayJoin,
      displayScoreBoard,
      joinLobby,
      questionComplete,
      startQuiz,
      readyCheck,
      addNewMessage,
      resetNumMessages,
      numMessages,
      reset
    } = this.props;

    let playerIndex = players.findIndex(itm => itm.name === name);
    let categoryIndex = categories.findIndex(
      itm => itm.apiName === decodeURIComponent(questions[0].category)
    );

    if (showStart) {
      return <StartGame create={displayCreate} join={displayJoin} />;
    }
    if (showCreate) {
      return <CreateGame joinLobby={joinLobby} id={name} />;
    }
    if (showJoin) {
      return <JoinGame joinLobby={joinLobby} id={name} />;
    }
    if (showLobby) {
      return (
        <Lobby
          showLoading={showLoading}
          name={name}
          startQuiz={startQuiz}
          players={players}
          readyCheck={readyCheck}
          code={code}
          addNewMessage={addNewMessage}
          messages={messages}
          numMessages={numMessages}
          resetNumMessages={resetNumMessages}
        />
      );
    }
    if (showFinalScoreBoard) {
      return (
        <FinalScoreBoard
          results={resultsMap}
          reset={() => reset(players[0].roomCode)}
          addNewMessage={addNewMessage}
          messages={messages}
          name={name}
          numMessages={numMessages}
          resetNumMessages={resetNumMessages}
        />
      );
    }
    if (chosenCategory) {
      return (
        <Questions
          currentCount={currentCount}
          toggleTimerRestart={toggleTimerRestart}
          timerRestart={timerRestart}
          displayScoreBoard={displayScoreBoard}
          questions={questions[currentQuestion]}
          roundLength={questions.length - 1}
          currentRound={players[playerIndex].round}
          shuffleAnswer={shuffleAnswer}
          currentQuestion={currentQuestion}
          name={name}
          categoryId={categories[categoryIndex].id}
          categoryIndex={categoryIndex}
          results={resultsMap}
          currentAnswer={players[playerIndex].currentAnswer}
          correctAnswer={questions[currentQuestion].correct_answer}
          showAnswers={showScoreBoard}
          questionComplete={() =>
            questionComplete(
              name,
              categories[categoryIndex].id,
              currentQuestion,
              players[playerIndex].round,
              questions.length - 1,
              '',
              10
            )
          }
        />
      );
    }

    return (
      <SolarSystem
        color={players[playerIndex].color}
        categories={categories}
        fetchData={fetchData}
        results={resultsMap}
        planetsScore={planetResultsMap}
        showLoading={showLoading}
        roundControl={roundControl}
        addNewMessage={addNewMessage}
        messages={messages}
        name={name}
        numMessages={numMessages}
        resetNumMessages={resetNumMessages}
      />
    );
  }
}

const mapStateToProps = state => ({
  ...state,
  resultsMap: selectors.totalScoreSelector(state),
  planetResultsMap: selectors.planetScoreSelector(state),
  shuffleAnswer: selectors.shuffleAnswerSelector(state),
  roundControl: selectors.roundControlSelector(state)
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (numQuestions, categoryId, color) => {
      dispatch(actions.fetchData(numQuestions, categoryId));
      dispatch(actions.activePlanet(categoryId, color));
    },
    displayCreate: () => {
      dispatch(actions.displayCreate());
    },
    displayJoin: () => {
      dispatch(actions.displayJoin());
    },
    displayScoreBoard: (
      name,
      current_answer,
      correct_answer,
      categoryId,
      currentCount
    ) => {
      dispatch(actions.setCurrentCount(currentCount));
      dispatch(actions.toggleTimerRestart());
      dispatch(
        actions.updateScore(name, current_answer, correct_answer, categoryId)
      );
      dispatch(actions.displayScoreBoard());
    },
    getQuestions: () => {
      dispatch(actions.getQuestions());
    },
    joinLobby: (oldName, newName, roomCode) => {
      dispatch(actions.joinLobby(oldName, newName, roomCode));
      dispatch(actions.setName(newName));
      code = roomCode;
    },
    setName: id => {
      dispatch(actions.setName(id));
    },
    addPlayers: playersArr => {
      dispatch(actions.addPlayers(playersArr));
    },
    sharedAction: action => {
      dispatch(action);
    },
    questionComplete: (
      name,
      categoryId,
      currentQuestion,
      round,
      length,
      color,
      currentCount
    ) => {
      dispatch(actions.displayScoreBoard());
      if (round === 1 && currentQuestion === length) {
        dispatch(actions.displayFinalScoreBoard());
        dispatch(actions.setCurrentCount(currentCount));
        dispatch(actions.toggleTimerRestart());
      }
      if (currentQuestion === length) {
        dispatch(actions.setCurrentCount(currentCount));
        dispatch(actions.toggleTimerRestart());
        dispatch(actions.activePlanet(categoryId, color));
        dispatch(actions.showCategories());
        dispatch(actions.updateRound(name));
      } else {
        dispatch(actions.setCurrentCount(currentCount));
        dispatch(actions.toggleTimerRestart());
        dispatch(actions.displayNextQuestion());
      }
    },
    startQuiz: (numQuestions, categoryId, shared) => {
      dispatch(actions.startQuiz(numQuestions, categoryId, shared));
    },
    readyCheck: name => {
      dispatch(actions.readyCheck(name));
    },
    setCurrentCount: currentCount => {
      dispatch(actions.setCurrentCount(currentCount));
    },
    toggleTimerRestart: () => {
      dispatch(actions.toggleTimerRestart());
    },
    addNewMessage: (name, content, date) => {
      dispatch(actions.addNewMessage(name, content, date));
    },
    resetNumMessages: () => {
      dispatch(actions.resetNumMessages());
    },
    reset: roomCode => {
      dispatch(actions.reset(roomCode));
    },
    restartQuiz: data => {
      dispatch(actions.restartQuiz(data));
    }
  };
};

App.propTypes = {
  chosenCategory: PropTypes.bool.isRequired,
  showScoreBoard: PropTypes.bool.isRequired,
  showFinalScoard: PropTypes.bool.isRequired,
  showStart: PropTypes.bool.isRequired,
  showCreate: PropTypes.bool.isRequired,
  showJoin: PropTypes.bool.isRequired,
  showLobby: PropTypes.bool.isRequired,
  showLoading: PropTypes.bool.isRequired,
  categories: PropTypes.array.isRequired,
  currentQuestion: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  players: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  rounds: PropTypes.number,
  resultsMap: PropTypes.object.isRequired,
  planetResultsMap: PropTypes.array.isRequired,
  shuffleAnswer: PropTypes.array.isRequired,
  roundControl: PropTypes.bool.isRequired,
  currentCount: PropTypes.number.isRequired,
  messages: PropTypes.array,
  timerRestart: PropTypes.bool.isRequired,
  fetchData: PropTypes.func.isRequired,
  displayCreate: PropTypes.func.isRequired,
  displayJoin: PropTypes.func.isRequired,
  displayScoreBoard: PropTypes.func.isRequired,
  getQuestions: PropTypes.func.isRequired,
  joinLobby: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  addPlayers: PropTypes.func.isRequired,
  questionComplete: PropTypes.func.isRequired,
  startQuiz: PropTypes.func.isRequired,
  readyCheck: PropTypes.func.isRequired,
  addNewMessage: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
