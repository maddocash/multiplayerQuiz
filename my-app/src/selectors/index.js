import {createSelector} from 'reselect';

const categoriesSelector = state => state.categories;
const playersSelector = state => state.players;
const currentQuestionSelector = state => state.currentQuestion;
const questionSelector = state => state.questions;
const nameSelector = state => state.name;

// const playerNameSelector = (players, id) => {
//   const filtered = players.filter(player => player.id === id);
//   return filtered.length > 0 && filtered[0].name;
// };

const shuffle = array => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export const totalScoreSelector = createSelector(
  categoriesSelector,
  playersSelector,
  (categories, players) => {
    let results = {};
    players.forEach(itm => {
      results[itm.name] = 0;
    });
    categories.forEach(category => {
      for (let name in category.score) {
        results[name] += category.score[name];
      }
    });
    return results;
  }
);

export const planetScoreSelector = createSelector(
  categoriesSelector,
  playersSelector,
  (categories, players) => {
    let planetsResults = categories.map(category => {
      let planet = {};
      for (let name in category.score) {
        planet[name] = category.score[name];
      }
      return planet;
    });
    return planetsResults;
  }
);

export const shuffleAnswerSelector = createSelector(
  currentQuestionSelector,
  questionSelector,
  (currentQuestion, questions) => {
    return shuffle([
      ...questions[currentQuestion].incorrect_answers,
      questions[currentQuestion].correct_answer
    ]);
  }
);

export const roundControlSelector = createSelector(
  playersSelector,
  nameSelector,
  (players, name) => {
    let playerIndex = players.findIndex(itm => itm.name === name);
    if (!players[playerIndex]) {
      return false;
    }
    let playerRound = players[playerIndex].round;
    let allPlayersRounds = players.map(itm => itm.round);
    let maxScore = Math.max.apply(playerRound, allPlayersRounds);
    let minScore = Math.min.apply(playerRound, allPlayersRounds);
    if (maxScore - minScore === 0 && maxScore === playerRound) {
      return false;
    }
    if (maxScore === playerRound) {
      return true;
    }
    return false;
  }
);
