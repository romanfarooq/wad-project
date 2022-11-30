import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    confirmModal: false,
    addNoteModal: false,
    editNoteModal: false,
  },
  reducers: {
    toggleConfirmModal: (state) => {
      state.confirmModal = !state.confirmModal;
    },
    toggleAddNoteModal: (state) => {
      state.addNoteModal = !state.addNoteModal;
    },
    toggleEditNoteModal: (state) => {
      state.editNoteModal = !state.editNoteModal;
    },
  },
});

export const { toggleConfirmModal, toggleAddNoteModal, toggleEditNoteModal } = modalSlice.actions;

export default modalSlice.reducer;
