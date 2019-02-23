require('dotenv').config();
const randomColor = require('randomcolor');
const mongoose = require('mongoose');
const compression = require('compression');
const socketio = require('socket.io');
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(compression());
// might need cookie-session when doing fb login
const helmet = require('helmet');

app.use(helmet());
app.disable('x-powered-by');

io.on('connection', socket => {
  // client connected
});

// my modules
const config = require('./config/config.js');
const Action = require('./models/action.js');
// import intitalState from './intitalState';

// mongoose.Promise = global.Promise;
// mongoose.connect(
//   `${config.dbProtocol}${config.dbUser}:${config.dbPass}@${config.dbHost}:${
//     config.dbPort
//   }/${config.dbName}`,
//   {useMongoClient: true}
// );

let players = [];
let rooms = {};

const roomCode = (rooms, name) => {
  let roomCode = '';
  for (const key in rooms) {
    if (rooms[key].includes(name)) {
      roomCode = key;
    }
  }
  return roomCode;
};

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/', (req, res) => {
  res.json({payload: "congrations you've been hacked"});
});

app.get('/namecheck/:nickName', (req, res) => {
  const name = req.params.nickName;
  if (players.map(itm => itm.name).includes(name)) {
    return res.json({
      payload: {
        exists: true
      }
    });
  }
  return res.json({
    payload: {
      exists: false
    }
  });
});

app.get('/health', (req, res) => {
  return res.send('health route working');
});

// client.emit('asd', intitalState);
io.on('connection', client => {
  players = [
    ...players,
    {
      name: client.id,
      color: randomColor({luminosity: 'bright'}),
      currentAnswer: '',
      readyCheck: false,
      round: 0,
      roomCode: ''
    }
  ];

  client.emit('setName', client.id);
  client.on('joinLobby', joinData => {
    rooms = {
      ...rooms,
      [joinData.roomCode]: rooms[joinData.roomCode]
        ? [...rooms[joinData.roomCode], joinData.name]
        : [joinData.name]
    };

    client.nickName = joinData.name;

    players = players.map(
      itm =>
        itm.name === joinData.oldName
          ? {...itm, name: joinData.name, roomCode: joinData.roomCode}
          : itm
    );
    client.join(joinData.roomCode);
    io
      .to(joinData.roomCode)
      .emit(
        'players',
        players.filter(itm => itm.roomCode === joinData.roomCode)
      );
  });

  client.on('sharedAction', action => {
    client.to(roomCode(rooms, client.nickName)).emit('sharedAction', action);
    // let action = new Action(action);
    // action.save((err, doc) => {
    //   if (err) {
    //     console.log('error: ', err);
    //   }
    //   console.log('Saved: ', doc);
    // });
  });

  client.on('singleAction', action => {
    // let action = new Action(action);
    // action.save((err, doc) => {
    //   if (err) {
    //     console.log('error: ', err);
    //   }
    //   console.log('Saved: ', doc);
    // });
  });

  client.on('restartQuiz', action => {
    // emit initial state
    // client.to(roomCode(rooms, action.name)).emit('sharedAction', action);
    // Action.remove({action.roomCode}, function(err,doc) {
    //   if(err) {
    //     console.log(err);
    //   }
    //   console.log(deleted)
    // });
  });

  client.on('disconnect', () => {
    const clientIndex =
      typeof client.nickName === 'undefined'
        ? players.findIndex(itm => itm.name === client.id)
        : players.findIndex(itm => itm.name === client.nickName);
    const currentRoom = players[clientIndex].roomCode;
    players = [
      ...players.slice(0, clientIndex),
      ...players.slice(clientIndex + 1)
    ];
    client
      .to(currentRoom)
      .emit('players', players.filter(itm => itm.roomCode === currentRoom));
  });
});

server.listen(config.port);
console.log('listening on port ', config.port);

// io.listen(socketPort);
// console.log('listening on port ', socketPort);
// app.listen(serverPort);
