import { Action } from 'redux';
// import handleNumStaus from './NumStatus';
const initialState = {
  // ...handleNumStaus.state,
  num: 20,
};
const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, num: state.num + 1 };
    // return handleNumStaus.actions.increment(state);
    case 'DECREMENT':
      return { ...state, num: state.num - 1 };
    // return handleNumStaus.actions.incrementByStep(state, action as any);
    default:
      return state;
  }
};

export default reducer;
