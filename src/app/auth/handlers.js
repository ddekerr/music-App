export const handlerRegisterFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

export const handlerLoginFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  console.log(state.user);
};

export const handlerLogoutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

export const handlerRefreshFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const handleRefreshPending = state => {
  state.isRefreshing = true;
};

export const handleRefreshRejected = state => {
  state.isRefreshing = false;
};
