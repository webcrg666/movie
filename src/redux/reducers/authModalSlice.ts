import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  status: false,
};

export const authModalSlice = createSlice({
  name: 'authModal',
  initialState,
  reducers: {
    setModalStatus(state, action: PayloadAction<boolean>) {
      state.status = action.payload;
    },
  },
});

export default authModalSlice.reducer;
