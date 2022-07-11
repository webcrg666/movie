import { createReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SET_LOGIN_MODAL } from '../action-names';

const initialState = {
  status: false,
};

// const createAction('SET_LOGIN_MODAL')

// const modalReducer = (state = initialState, action: any) => {
//   switch (action.type) {
//     case SET_LOGIN_MODAL:
//       return { ...state, loginModalActive: action.isActive };
//     default:
//       return state;
//   }
// };

// const modalReducer = createReducer(initialState, (builder) => {
//   builder.setLoginModal('SET_LOGIN_MODAL', (state, action) => {
//     state.loginModalActive = true;
//   });
// });

export const authModalSlice = createSlice({
  name: 'authModal',
  initialState,
  reducers: {
    setModalStatus(state, action: PayloadAction<boolean>) {
      console.log(action);

      state.status = action.payload;
    },
  },
});

export default authModalSlice.reducer;

// export default modalReducer;
