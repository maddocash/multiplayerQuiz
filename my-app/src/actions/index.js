export const displayScoreBoard = () => {
  return {
    type: 'DISPLAY_SCOREBOARD',
    meta: false
  };
};

export const displayFinalScoreBoard = () => {
  return {
    type: 'DISPLAY_FINAL_SCOREBOARD',
    meta: false
  };
};

export const displayCreate = () => {
  return {
    type: 'DISPLAY_CREATE',
    meta: false
  };
};

export const displayJoin = () => {
  return {
    type: 'DISPLAY_JOIN',
    meta: false
  };
};

export const resetNumMessages = () => {
  return {
    type: 'RESET_NUM_MESSAGES',
    meta: false
  };
};

export const joinLobby = (oldName, name, roomCode) => {
  return {
    type: 'JOIN_LOBBY',
    roomCode,
    oldName,
    name,
    meta: true
  };
};

export const showCategories = () => {
  return {
    type: 'SHOW_CATEGORIES',
    meta: false
  };
};

export const updateRound = name => {
  return {
    type: 'UPDATE_ROUND',
    name,
    meta: true
  };
};

export const activePlanet = (categoryId, color) => {
  return {
    type: 'ACTIVE_PLANET',
    categoryId,
    color,
    meta: true
  };
};

export const readyCheck = name => {
  return {
    type: 'READY_CHECK',
    name,
    meta: true
  };
};

export const fetchData = (numQuestions, categoryId, shared) => {
  if (typeof shared === 'undefined') {
    return {
      type: 'FETCHING_DATA',
      numQuestions,
      categoryId,
      meta: false
    };
  }
  return {
    type: 'FETCHING_DATA',
    numQuestions,
    categoryId,
    meta: true
  };
};

export const displayNextQuestion = () => {
  return {
    type: 'DISPLAY_NEXT_QUESTION',
    meta: false
  };
};

export const updateScore = (name, currentAnswer, correctAnswer, categoryId) => {
  if (currentAnswer === correctAnswer) {
    return {
      type: 'UPDATE_SCORE',
      name,
      currentAnswer,
      categoryId,
      meta: true
    };
  }
  return {
    type: 'STORE_ANSWER',
    name,
    currentAnswer,
    meta: false
  };
};

export const setName = id => {
  return {
    type: 'SET_NAME',
    name: id,
    meta: false
  };
};

export const getQuestions = () => {
  return {
    type: 'GET_QUESTIONS',
    meta: false
  };
};

export const addPlayers = playersArr => {
  return {
    type: 'ADD_PLAYERS',
    playersArr
  };
};

export const setCurrentCount = currentCount => {
  return {
    type: 'SET_CURRENT_COUNT',
    currentCount
  };
};

export const toggleTimerRestart = () => {
  return {
    type: 'TOGGLE_TIMER_RESTART',
    meta: false
  };
};

export const addNewMessage = (name, content, date) => {
  let newMessage = {
    name,
    content,
    date
  };
  return {
    type: 'ADD_NEW_MESSAGE',
    newMessage,
    meta: true
  };
};

export const reset = roomCode => {
  return {
    type: 'RESET',
    meta: true,
    roomCode
  };
};

export const restartQuiz = data => {
  return {
    type: 'RESTART_QUIZ',
    meta: true,
    data
  };
};

export const startQuiz = (numQuestions, categoryId, shared) => {
  return fetchData(numQuestions, categoryId, shared);
};
