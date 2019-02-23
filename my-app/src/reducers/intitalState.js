const intitalState = {
  chosenCategory: false,
  showScoreBoard: false,
  showFinalScoard: false,
  showStart: true,
  showCreate: false,
  showJoin: false,
  showLobby: false,
  showLoading: false,
  timerRestart: false,
  currentCount: 10,
  currentQuestion: 0,
  name: '',
  messages: [],
  numMessages: 0,
  categories: [
    {
      id: 9,
      apiName: 'General Knowledge',
      displayName: 'General Knowledge',
      score: {},
      isActive: false,
      numQuestions: 5,
      color: ''
    },
    {
      id: 15,
      apiName: 'Entertainment: Video Games',
      displayName: 'Video Games',
      score: {},
      isActive: false,
      numQuestions: 5,
      color: ''
    },
    {
      id: 16,
      apiName: 'Entertainment: Board Games',
      displayName: 'Board Games',
      score: {},
      isActive: false,
      numQuestions: 5,
      color: ''
    },
    {
      id: 17,
      apiName: 'Science & Nature',
      displayName: 'Science & Nature',
      score: {},
      isActive: false,
      numQuestions: 5,
      color: ''
    },
    {
      id: 18,
      apiName: 'Science: Computers',
      displayName: 'Computers',
      score: {},
      isActive: false,
      numQuestions: 5,
      color: ''
    },
    {
      id: 21,
      apiName: 'Sports',
      displayName: 'Sport',
      score: {},
      isActive: false,
      numQuestions: 5,
      color: ''
    },
    {
      id: 22,
      apiName: 'Geography',
      displayName: 'Geography',
      score: {},
      isActive: false,
      numQuestions: 5,
      color: ''
    },
    {
      id: 23,
      apiName: 'History',
      displayName: 'History',
      score: {},
      isActive: false,
      numQuestions: 5,
      color: ''
    },
    {
      id: 27,
      apiName: 'Animals',
      displayName: 'Animals',
      score: {},
      isActive: false,
      numQuestions: 5,
      color: ''
    },
    {
      id: 28,
      apiName: 'Vehicles',
      displayName: 'Vehicles',
      score: {},
      isActive: false,
      numQuestions: 5,
      color: ''
    },
    {
      id: 29,
      apiName: 'Entertainment: Comics',
      displayName: 'Comics',
      score: {},
      isActive: false,
      numQuestions: 5,
      color: ''
    },
    {
      id: 30,
      apiName: 'Science: Gadgets',
      displayName: 'Gadgets',
      score: {},
      isActive: false,
      numQuestions: 5,
      color: ''
    },
    {
      id: 32,
      apiName: 'Entertainment: Cartoon & Animations',
      displayName: 'Cartoon & Animations',
      score: {},
      isActive: false,
      numQuestions: 5,
      color: ''
    }
  ],
  questions: [
    { category: '', incorrect_answers: ['', '', ''], correct_answer: '' }
  ],
  players: [
    {
      name: '',
      color: '',
      currentAnswer: '',
      readyCheck: false,
      round: 0,
      roomCode: ''
    }
  ]
};

export default intitalState;
