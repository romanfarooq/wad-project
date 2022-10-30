import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import darkModeReducer from './slices/darkModeSlice';
import todosReducer from './slices/todosSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    darkMode: darkModeReducer,
    todos: todosReducer,
  },
});

export default store;
