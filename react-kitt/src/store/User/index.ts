const initialState = {
  token: '',
  nickname: '',
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        token: action.payload.token,
        nickname: action.payload.nickName,
      };
    default:
      return state;
  }
};

export default reducer;
