const initialState = {
  arr: [10, 20, 30],
};
const reducer = (
  state = initialState,
  action: { type: string; payload: { val: number } }
) => {
  switch (action.type) {
    case 'PUSH':
      return { ...state, num: state.arr.push(action.payload.val) };
    default:
      return state;
  }
};

export default reducer;
