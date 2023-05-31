export const handleGetAllFulfilled = (state, action) => {
  state.songs = action.payload;
};

export const handleGetByIdFulfilled = (state, action) => {
  state.activeSong = action.payload;
};

export const handleAdd = (state, action) => {
  state.songs.push(action.payload);
};

export const handleRemoveById = (state, action) => {
  const index = state.songs.findIndex(song => song._id === action.payload._id);
  state.songs.splice(index, 1);
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
