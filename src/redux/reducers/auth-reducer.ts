import { LOGIN, LOGOUT } from '../action-names';

const initialState = {
  userRole: 'guest',
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, userRole: 'user' };
    case LOGOUT:
      return { ...state, userRole: 'guest' };
    default:
      return state;
  }
};

export default authReducer;
