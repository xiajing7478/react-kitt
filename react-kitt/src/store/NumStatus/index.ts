export default {
  state: {
    num: 20,
  },
  actions: {
    increment(state: { num: number }) {
      return state.num++;
    },
    incrementByStep(
      state: { num: number },
      actions: { type: string; val: number }
    ) {
      state.num += actions.val;
    },
  },
};
