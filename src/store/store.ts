import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import cardsSlice from './cardsSlice';
import editViewSlice from './editViewSlice';
import paginationSlice from './paginationSlice';

const rootReducer = combineReducers({
  editView: editViewSlice,
  auth: authSlice,
  cards: cardsSlice,
  pagination: paginationSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
