import questions from './questions';

import state from './intitalState';

let intitalState = {
  ...state,
  players: [
    {
      name: 'ash',
      color: '#F0F0F0',
      currentAnswer: '',
      readyCheck: false,
      round: 0
    }
  ]
};

let scoreState = {
  ...state,
  players: [
    {
      name: 'ash',
      color: '#F0F0F0',
      currentAnswer: '',
      readyCheck: true,
      round: 0
    }
  ]
};

let fetchedQuestions = [
  {
    category: 'General%20Knowledge',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'Where%20is%20the%20train%20station%20%22Llanfair%C2%ADpwllgwyngyll%C2%ADgogery%C2%ADchwyrn%C2%ADdrobwll%C2%ADllan%C2%ADtysilio%C2%ADgogo%C2%ADgoch%22%3F',
    correct_answer: 'Wales',
    incorrect_answers: ['Moldova', 'Czech%20Republic', 'Denmark']
  },
  {
    category: 'General%20Knowledge',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'Before%20the%2019th%20Century%2C%20the%20%22Living%20Room%22%20was%20originally%20called%20the...',
    correct_answer: 'Parlor',
    incorrect_answers: ['Open%20Room', 'Sitting%20Room', 'Loft']
  },
  {
    category: 'General%20Knowledge',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'Which%20film%20star%20has%20his%20statue%20in%20Leicester%20Square%3F',
    correct_answer: 'Charlie%20Chaplin',
    incorrect_answers: [
      'Paul%20Newman',
      'Rowan%20Atkinson%20',
      'Alfred%20Hitchcock'
    ]
  },
  {
    category: 'General%20Knowledge',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'How%20many%20calories%20are%20in%20a%20355%20ml%20can%20of%20Pepsi%20Cola%3F',
    correct_answer: '150',
    incorrect_answers: ['200', '100', '155']
  },
  {
    category: 'General%20Knowledge',
    type: 'multiple',
    difficulty: 'medium',
    question:
      'What%20was%20the%20soft%20drink%20Pepsi%20originally%20introduced%20as%3F',
    correct_answer: 'Brad%27s%20Drink',
    incorrect_answers: ['Pepsin%20Pop', 'Carolina%20Cola', 'Pepsin%20Syrup']
  }
];

let backupQuestions = [
  {
    category: 'General%20Knowledge',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'Before%20the%2019th%20Century%2C%20the%20%22Living%20Room%22%20was%20originally%20called%20the...',
    correct_answer: 'Parlor',
    incorrect_answers: ['Open%20Room', 'Sitting%20Room', 'Loft']
  },
  {
    category: 'General%20Knowledge',
    type: 'multiple',
    difficulty: 'easy',
    question: 'Red%20Vines%20is%20a%20brand%20of%20what%20type%20of%20candy%3F',
    correct_answer: 'Licorice',
    incorrect_answers: ['Lollipop', 'Chocolate', 'Bubblegum']
  },
  {
    category: 'General%20Knowledge',
    type: 'multiple',
    difficulty: 'medium',
    question: 'What%20is%20the%20unit%20of%20currency%20in%20Laos%3F',
    correct_answer: 'Kip',
    incorrect_answers: ['Ruble', 'Konra', 'Dollar']
  },
  {
    category: 'General%20Knowledge',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'Which%20one%20of%20these%20is%20not%20a%20typical%20European%20sword%20design%3F',
    correct_answer: 'Scimitar',
    incorrect_answers: ['Falchion', 'Ulfberht', 'Flamberge']
  },
  {
    category: 'General%20Knowledge',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'What%20do%20the%20letters%20of%20the%20fast%20food%20chain%20KFC%20stand%20for%3F',
    correct_answer: 'Kentucky%20Fried%20Chicken',
    incorrect_answers: [
      'Kentucky%20Fresh%20Cheese',
      'Kibbled%20Freaky%20Cow',
      'Kiwi%20Food%20Cut'
    ]
  }
];

it('display scoreboard', () => {
  expect(questions(intitalState, {type: 'DISPLAY_SCOREBOARD'})).toEqual({
    ...intitalState,
    showScoreBoard: true
  });
});

it('display final scoreboard', () => {
  expect(questions(scoreState, {type: 'DISPLAY_FINAL_SCOREBOARD'})).toEqual({
    ...scoreState,
    showFinalScoreBoard: true
  });
});

it('display create game page', () => {
  expect(questions(state, {type: 'DISPLAY_CREATE'})).toEqual({
    ...state,
    showStart: false,
    showCreate: true
  });
});

it('display join game page', () => {
  expect(questions(state, {type: 'DISPLAY_JOIN'})).toEqual({
    ...state,
    showStart: false,
    showJoin: true
  });
});

it('display Lobby page', () => {
  expect(questions(intitalState, {type: 'JOIN_LOBBY'})).toEqual({
    ...intitalState,
    showCreate: false,
    showJoin: false,
    showLobby: true
  });
});

it('return to solar system', () => {
  expect(questions(intitalState, {type: 'SHOW_CATEGORIES'})).toEqual({
    ...intitalState,
    chosenCategory: !intitalState.chosenCategory,
    currentQuestion: 0
  });
});

it('update a players round', () => {
  expect(questions(scoreState, {type: 'UPDATE_ROUND', name: 'ash'})).toEqual({
    ...scoreState,
    players: [
      {
        ...scoreState.players[0],
        round: scoreState.players[0].round + 1
      },
      ...scoreState.players.slice(1)
    ]
  });
});

it('remove click from planets', () => {
  expect(
    questions(intitalState, {
      type: 'ACTIVE_PLANET',
      categoryId: 15,
      color: 'red'
    })
  ).toEqual({
    ...intitalState,
    categories: [
      ...intitalState.categories.slice(0, 1),
      {
        ...intitalState.categories[1],
        isActive: !intitalState.categories[1].isActive,
        color: 'red'
      },
      ...intitalState.categories.slice(1 + 1)
    ]
  });
});

it('ready check', () => {
  expect(questions(intitalState, {type: 'READY_CHECK', name: 'ash'})).toEqual({
    ...intitalState,
    players: [
      {
        ...intitalState.players[0],
        readyCheck: true
      },
      ...intitalState.players.slice(1)
    ]
  });
});

it('fetch data', () => {
  expect(questions(intitalState, {type: 'FETCHING_DATA'})).toEqual({
    ...intitalState,
    questions: [
      {category: '', incorrect_answers: ['', '', ''], correct_answer: ''}
    ],
    showLoading: true
  });
  expect(
    questions(intitalState, {
      type: 'FETCHING_DATA_SUCCESS',
      questions: fetchedQuestions
    })
  ).toEqual({
    ...intitalState,
    questions: fetchedQuestions,
    showLobby: false,
    showLoading: false,
    chosenCategory: true
  });
  expect(
    questions(intitalState, {
      type: 'FETCHING_DATA_FAILURE',
      categoryId: 9,
      numQuestions: 5
    })
  ).toEqual({
    ...intitalState,
    questions: backupQuestions,
    chosenCategory: true,
    showLobby: false,
    showLoading: false
  });
});

it('show next question', () => {
  expect(questions(intitalState, {type: 'DISPLAY_NEXT_QUESTION'})).toEqual({
    ...intitalState,
    currentQuestion: 1
  });
});

it('score update', () => {
  expect(
    questions(scoreState, {
      type: 'UPDATE_SCORE',
      name: 'ash',
      categoryId: 9,
      currentAnswer: 'test'
    })
  ).toEqual({
    ...scoreState,
    players: [
      {...scoreState.players[0], currentAnswer: 'test'},
      ...scoreState.players.slice(1)
    ],
    categories: [
      {
        ...scoreState.categories[0],
        numQuestions: 4,
        score: {ash: 1}
      },
      ...scoreState.categories.slice(1)
    ]
  });
});

it('store answer', () => {
  expect(
    questions(scoreState, {
      type: 'STORE_ANSWER',
      name: 'ash',
      currentAnswer: 'test'
    })
  ).toEqual({
    ...scoreState,
    players: [
      {
        ...scoreState.players[0],
        currentAnswer: 'test'
      },
      ...scoreState.players.slice(1)
    ]
  });
});

it('set name', () => {
  expect(questions(intitalState, {type: 'SET_NAME', name: 123})).toEqual({
    ...intitalState,
    name: 123
  });
});

it('add players', () => {
  expect(
    questions(state, {
      type: 'ADD_PLAYERS',
      playersArr: [
        {
          name: 'ash',
          color: '#F0F0F0',
          currentAnswer: '',
          readyCheck: false,
          round: 0
        }
      ]
    })
  ).toEqual(intitalState);
});

it('current count', () => {
  expect(
    questions(intitalState, {type: 'SET_CURRENT_COUNT', currentCount: 3})
  ).toEqual({
    ...intitalState,
    currentCount: 3
  });
});

it('timer restart', () => {
  expect(questions(intitalState, {type: 'TOGGLE_TIMER_RESTART'})).toEqual({
    ...intitalState,
    timerRestart: true
  });
});

it('adding a new message', () => {
  expect(
    questions(intitalState, {
      type: 'ADD_NEW_MESSAGE',
      newMessage: {name: 'ash', content: 'my first message', date: 'now'}
    })
  ).toEqual({
    ...intitalState,
    messages: [
      ...intitalState.messages,
      {name: 'ash', content: 'my first message', date: 'now'}
    ]
  });
});

it('reset', () => {
  expect(questions(intitalState, {type: 'RESET'})).toEqual(state);
  expect(questions(scoreState, {type: 'RESET'})).toEqual(state);
});

it('testing default return', () => {
  expect(questions(state, {})).toEqual(state);
  expect(questions(state, {type: ''})).toEqual(state);
});
