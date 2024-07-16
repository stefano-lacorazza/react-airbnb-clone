import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './reducers';


const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;
export default store;