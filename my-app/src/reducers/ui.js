const intitalState = {
  showScoreBoard: false,
  showFinalScoreBoard: false,
  showStart: true,
  showCreate: false,
  showJoin: false,
  showLobby: false
};

const ui = (state = intitalState, action) => {
  switch (action.type) {
    /////////////////////////////////////
    //toggles showing the scoreboard
    case 'DISPLAY_SCOREBOARD':
      return {
        ...state,
        showScoreBoard: !state.showScoreBoard
      };
    /////////////////////////////////////
    //toggles showing the scoreboard
    case 'SHOW_QUESTIONS':
      return {
        ...state,
        chosenCategory: !state.chosenCategory,
        showLobby: false
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
    //shows the solar system
    case 'JOIN_LOBBY':
      return {
        ...state,
        showCreate: false,
        showJoin: false,
        showLobby: true
      };
    default:
      return state;
  }
};

export default ui;
