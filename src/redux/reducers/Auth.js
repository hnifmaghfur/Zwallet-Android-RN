const initialState = {
  token: [],
  loading: false,
  isLogin: false,
};

export const Auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogin: true,
        token: action.payload,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        loading: false,
        isLogin: false,
        data: [],
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        loading: false,
        isLogin: false,
        token: [],
        _persist: {
          rehydrated: true,
          version: -1,
        },
      };
    default:
      return state;
  }
};
export default Auth;
