import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import darkModeReducer from './slices/darkModeSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    darkMode: darkModeReducer,
  },
});

export default store;
