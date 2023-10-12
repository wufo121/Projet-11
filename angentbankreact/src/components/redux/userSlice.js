import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
  error: '',
  token : null,
  isModalOpen: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = '';
    },
    setToken: (state, action) => {
        state.token = action.payload
    },
    logout: (state) => {
        state.token=null
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { setEmail, setPassword, setError, clearError, setToken,logout, openModal,
  closeModal } = userSlice.actions;
export default userSlice.reducer;
export const selectToken = (state) => state.user.token