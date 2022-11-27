import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import darkModeReducer from "./slices/darkModeSlice";
import todosReducer from "./slices/todosSlice";
import modalReducer from "./slices/modalSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    darkMode: darkModeReducer,
    todos: todosReducer,
    modal: modalReducer,
  },
});

export default store;
