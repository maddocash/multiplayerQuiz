import {put, takeEvery} from 'redux-saga/effects';
import * as backupQuestions from '../backup';

function* fetchData(action) {
  let numQuestions = action.numQuestions,
    categoryId = action.categoryId;
  try {
    const questions = yield getQuestion(numQuestions, categoryId);
    yield put({type: 'FETCHING_DATA_SUCCESS', questions});
  } catch (e) {
    yield put({type: 'FETCHING_DATA_FAILURE', numQuestions, categoryId});
  }
}

function* dataSaga() {
  yield takeEvery('FETCHING_DATA', fetchData);
}

const getQuestion = (numQuestions, categoryId) => {
  if (categoryId === 9) {
    return fetch(
      `https://opentdb.com/api.php?amount=${
        numQuestions
      }&type=multiple&encode=url3986&category=${categoryId}`
    )
      .then(res => res.json())
      .then(questions => {
        if (questions.response_code !== 0) {
          return backupQuestions[`cat${categoryId}`].filter(
            (itm, idx) => idx < numQuestions
          );
        }
        return questions.results;
      })
      .catch(e =>
        backupQuestions[`cat${categoryId}`].filter(
          (itm, idx) => idx < numQuestions
        )
      );
  }
  return fetch(
    `https://opentdb.com/api.php?amount=${
      numQuestions
    }&encode=url3986&category=${categoryId}`
  )
    .then(res => res.json())
    .then(questions => {
      if (questions.response_code !== 0) {
        return backupQuestions[`cat${categoryId}`].filter(
          (itm, idx) => idx < numQuestions
        );
      }
      return questions.results;
    })
    .catch(e =>
      backupQuestions[`cat${categoryId}`].filter(
        (itm, idx) => idx < numQuestions
      )
    );
};
export default dataSaga;
