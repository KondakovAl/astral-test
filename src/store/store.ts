import { combineReducers, configureStore } from '@reduxjs/toolkit';
import paginationSlice from './paginationSlice';

const rootReducer = combineReducers({
  pagination: paginationSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
