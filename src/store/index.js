import { createStore } from 'redux';

const initialState = 1

const reducer = (state = initialState, { type }) => {
  if(type) {
    return state * 10
  } else {
    return state
  }
}

export default createStore(
  reducer
);