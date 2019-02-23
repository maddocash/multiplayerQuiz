export const remoteActions = socket => store => next => action => {
  let stampedAction = {
    ...action,
    date: Date.now()
  };
  if (stampedAction.meta === true) {
    delete stampedAction.meta;
    // stampedAction.meta = null;
    if (stampedAction.type === 'JOIN_LOBBY') {
      socket.emit('joinLobby', stampedAction);
      // } else if (stampedAction.type === 'RESET') {
      //   socket.emit('restartQuiz', stampedAction);
    } else {
      socket.emit('sharedAction', stampedAction);
    }
  }

  if (stampedAction.meta === null || stampedAction.meta === false) {
    socket.emit('singleAction', stampedAction);
  }

  return next(stampedAction);
};
