import { VERIFY_USER, LOGGED_IN, CREATE_USER, LOGGED_OUT, UPDATE_USER } from '../actions/type';

const initState = {
  loggedIn: false,
  user: {}
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case VERIFY_USER:
      return { ...state, loggedIn: action.payload.loggedIn, user: action.payload.user };
    case LOGGED_IN:
      return { ...state, loggedIn: true, user: action.payload.user };
    case CREATE_USER:
      return state;
    case UPDATE_USER:
      return { ...state, loggedIn: true, user: action.payload };
    case LOGGED_OUT:
      return { ...state, loggedIn: false, user: {}, cart: {}, orders: {}, orderBooks: {} };
    default:
      return state;
  }
}

export default authReducer;