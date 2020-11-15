import { takeEvery, put, call } from 'redux-saga/effects';
import { ITEM_REQUESTED, requestItemsSuccess } from './actions';

export function* sagaWatcher() {
  yield takeEvery(ITEM_REQUESTED, requestItems);
}

function* requestItems() {
  const data = yield call(fetchData);
  yield put(requestItemsSuccess(data));
}

function fetchData() {
  return fetch('https://api.thecatapi.com/v1/images/search', {
    headers: {
      'x-api-key': '3f76a616-d003-49ff-ac35-fe0c51f7f9f2',
    },
  }).then((res) => res.json());
}
