import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userRole: 'guest',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.userRole = 'user';
    },
    logout(state) {
      state.userRole = 'guest';
    },
  },
});

export default authSlice.reducer;
