import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { creamSlice } from './features/api/creamSlice';
import listServicesSlice from './features/listServiceSlice';
//import listRolesSlice from './features/listRolesSlice';
//import listActionSlice from './features/listActionSlice';

// Exporting typeof store's state/dispatch helps avoid type errors throughout app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const reducer = combineReducers({
  listServicesSlice,
 // listRoles: listRolesSlice,
  //listActions: listActionSlice,
  [creamSlice.reducerPath]: creamSlice.reducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(creamSlice.middleware),
});

export default store;
