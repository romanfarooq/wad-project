import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modal: false,
  },
  reducers: {
    toggleModal: (state) => {
      state.modal = !state.modal;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
