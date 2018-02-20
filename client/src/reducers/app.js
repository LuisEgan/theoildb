import { Map } from 'immutable';
import types from '../actions/types';

export const initialState = Map({
  asyncStart: false,
  data: {}
});

const actionsMap = {
  [types.GET_DATA]: (state, action) => {
    const asyncStart = true;
    // const { data } = action.payload;
    return state.merge(Map({
        asyncStart,
    }));
  },

};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
