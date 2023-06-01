// Handlers reducers
export const handleGetAllFulfilled = (state, action) => {
  state.items = action.payload;
};

export const handleGetByIdFulfilled = (state, action) => {
  state.activeSong = action.payload;
};

export const handleAdd = (state, action) => {
  state.items.push(action.payload);
};

export const handleRemoveById = (state, action) => {
  const index = state.items.findIndex(song => song._id === action.payload._id);
  state.items.splice(index, 1);
};

export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
