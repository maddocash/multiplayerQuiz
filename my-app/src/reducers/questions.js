import intitalState from './intitalState';
import * as backupQuestions from '../backup';

const questions = (state = intitalState, action) => {
  let index = state.players.findIndex(itm => itm.name === action.name);
  let categoriesIndex = state.categories.findIndex(
    itm => itm.id === action.categoryId
  );
  switch (action.type) {
    /////////////////////////////////////
    //toggles showing the scoreboard
    case 'DISPLAY_SCOREBOARD':
      return {
        ...state,
        showScoreBoard: !state.showScoreBoard
      };
    /////////////////////////////////////
    //toggles showing the final score board
    case 'DISPLAY_FINAL_SCOREBOARD':
      return {
        ...state,
        showFinalScoreBoard: !state.showFinalScoreBoard
      };
    /////////////////////////////////////
    //shows the create game page
    case 'DISPLAY_CREATE':
      return {
        ...state,
        showStart: !state.showStart,
        showCreate: !state.showCreate
      };
    /////////////////////////////////////
    //shows the join game page
    case 'DISPLAY_JOIN':
      return {
        ...state,
        showStart: !state.showStart,
        showJoin: !state.showJoin
      };
    /////////////////////////////////////
    //shows the join game page
    case 'RESET_NUM_MESSAGES':
      return {
        ...state,
        numMessages: state.messages.length
      };
    /////////////////////////////////////
    //shows the solar system
    case 'JOIN_LOBBY':
      return {
        ...state,
        showCreate: false,
        showJoin: false,
        showLobby: true
      };
    /////////////////////////////////////
    //shows the solar system
    case 'SHOW_CATEGORIES':
      return {
        ...state,
        chosenCategory: !state.chosenCategory,
        currentQuestion: 0
      };
    /////////////////////////////////////
    //toggles the categories page at the end of a round
    //and set the currentQuestion to 0 ready for next round
    //increase the round number
    case 'UPDATE_ROUND':
      return {
        ...state,
        players: [
          ...state.players.slice(0, index),
          {
            ...state.players[index],
            round: state.players[index].round + 1
          },
          ...state.players.slice(index + 1)
        ]
      };
    /////////////////////////////////////
    //toggles whether click on a planet or not
    case 'ACTIVE_PLANET':
      return {
        ...state,
        categories: [
          ...state.categories.slice(0, categoriesIndex),
          {
            ...state.categories[categoriesIndex],
            isActive: !state.categories[categoriesIndex].isActive,
            color: action.color
          },
          ...state.categories.slice(categoriesIndex + 1)
        ]
      };
    /////////////////////////////////////
    //
    case 'READY_CHECK':
      return {
        ...state,
        players: [
          ...state.players.slice(0, index),
          {
            ...state.players[index],
            readyCheck: !state.players[index].readyCheck
          },
          ...state.players.slice(index + 1)
        ]
      };
    /////////////////////////////////////
    //resets the questions array to be blank
    case 'FETCHING_DATA':
      return {
        ...state,
        questions: [
          { category: '', incorrect_answers: ['', '', ''], correct_answer: '' }
        ],
        showLoading: true
      };
    /////////////////////////////////////
    //fills the questions array and toggles the categories page off
    case 'FETCHING_DATA_SUCCESS':
      return {
        ...state,
        questions:
          action.questions.length === 0
            ? [
                {
                  category: '',
                  incorrect_answers: ['', '', ''],
                  correct_answer: ''
                }
              ]
            : action.questions,
        chosenCategory: !state.chosenCategory,
        showLobby: false,
        showLoading: false
      };
    /////////////////////////////////////
    case 'FETCHING_DATA_FAILURE':
      let backup = backupQuestions[`cat${action.id}`].filter(
        (itm, idx) => idx < action.numQuestions
      );
      console.log('FaIL', 'inside the failure case');
      return {
        ...state,
        questions: backup,
        showLobby: false,
        showLoading: false,
        chosenCategory: !state.chosenCategory
      };
    /////////////////////////////////////
    //toggles to next question
    case 'DISPLAY_NEXT_QUESTION':
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1
      };
    /////////////////////////////////////
    //updates the score of the player and the score for the player in
    //the categories array
    case 'UPDATE_SCORE':
      return {
        ...state,
        players: [
          ...state.players.slice(0, index),
          { ...state.players[index], currentAnswer: action.currentAnswer },
          ...state.players.slice(index + 1)
        ],
        categories: [
          ...state.categories.slice(0, categoriesIndex),
          {
            ...state.categories[categoriesIndex],
            numQuestions: state.categories[categoriesIndex].numQuestions - 1,
            score: {
              ...state.categories[categoriesIndex].score,
              [action.name]: state.categories[categoriesIndex].score[
                action.name
              ]
                ? state.categories[categoriesIndex].score[action.name] + 1
                : 1
            }
          },
          ...state.categories.slice(categoriesIndex + 1)
        ]
      };
    /////////////////////////////////////
    //update your current answer in players array
    case 'STORE_ANSWER':
      return {
        ...state,
        players: [
          ...state.players.slice(0, index),
          {
            ...state.players[index],
            currentAnswer: action.currentAnswer
          },
          ...state.players.slice(index + 1)
        ]
      };
    /////////////////////////////////////
    //sets your name when you connect to the socket
    case 'SET_NAME':
      return {
        ...state,
        name: action.name
      };
    /////////////////////////////////////
    // updates the players array to contain the new players
    case 'ADD_PLAYERS':
      return {
        ...state,
        players: action.playersArr
      };
    /////////////////////////////////////
    //sets the currentCount to the new timer
    case 'SET_CURRENT_COUNT':
      return {
        ...state,
        currentCount: action.currentCount
      };
    /////////////////////////////////////
    // changes whether or not the time should restart
    case 'TOGGLE_TIMER_RESTART':
      return {
        ...state,
        timerRestart: !state.timerRestart
      };
    /////////////////////////////////////
    // changes whether or not the time should restart
    case 'ADD_NEW_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.newMessage],
        numMessages: state.numMessages + 1
      };
    /////////////////////////////////////
    //reverts to original state of the game.
    case 'RESET':
      return intitalState;
    /////////////////////////////////////
    //needed for inital state
    default:
      return state;
  }
};

export default questions;
