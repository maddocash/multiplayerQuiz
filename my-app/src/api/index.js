import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:80');

export const subscribeToQuestions = cb => {
  socket.on('message', msg => cb(null, msg));
  socket.emit('message', 'hi');
};
