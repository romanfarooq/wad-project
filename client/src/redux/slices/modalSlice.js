import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    confirmModal: false,
    noteModal: false,
  },
  reducers: {
    toggleConfirmModal: (state) => {
      state.confirmModal = !state.confirmModal;
    },
    toggleNoteModal: (state) => {
      state.noteModal = !state.noteModal;
    },
  },
});

export const { toggleConfirmModal, toggleNoteModal } = modalSlice.actions;

export default modalSlice.reducer;
