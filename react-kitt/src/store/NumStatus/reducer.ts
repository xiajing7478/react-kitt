import { Action } from 'redux';
const initialState = {
  num: 20,
};
const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      // setTimeout(() => {
      return { ...state, num: state.num + 1 };
    // }, 1000)
    // break;
    case 'DECREMENT':
      return { ...state, num: state.num - 1 };
    default:
      return state;
  }
};

export default reducer;
