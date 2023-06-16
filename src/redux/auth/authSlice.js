import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const registerFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const logInFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const logOutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const refreshPending = state => {
  state.isRefreshing = true;
};

const refreshFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const refreshRejected = state => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, registerFulfilled)
      .addCase(logIn.fulfilled, logInFulfilled)
      .addCase(logOut.fulfilled, logOutFulfilled)
      .addCase(refreshUser.pending, refreshPending)
      .addCase(refreshUser.fulfilled, refreshFulfilled)
      .addCase(refreshUser.rejected, refreshRejected);
  },
});

export const authReducer = authSlice.reducer;
