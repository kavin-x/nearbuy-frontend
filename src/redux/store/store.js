import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userAuthDetailsSlice from "../slice/userAuthSlice";

const rootReducer = combineReducers({ userAuth: userAuthDetailsSlice });
const Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default Store;
