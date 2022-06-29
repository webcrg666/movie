import { SET_LOGIN_MODAL } from '../actionNames';

const initialState = {
  loginModalActive: false,
};

const modalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LOGIN_MODAL:
      return { ...state, loginModalActive: action.isActive };
    default:
      return state;
  }
};

export default modalReducer;
