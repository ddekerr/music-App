import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refresh } from './operations';
import {
  handlerRegisterFulfilled,
  handlerLoginFulfilled,
  handlerLogoutFulfilled,
  handlerRefreshFulfilled,
  handleRefreshPending,
  handleRefreshRejected,
} from './handlers';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handlerRegisterFulfilled)
      .addCase(login.fulfilled, handlerLoginFulfilled)
      .addCase(logout.fulfilled, handlerLogoutFulfilled)
      .addCase(refresh.fulfilled, handlerRefreshFulfilled)
      .addCase(refresh.pending, handleRefreshPending)
      .addCase(refresh.rejected, handleRefreshRejected);
  },
});

export const authReducer = authSlice.reducer;
