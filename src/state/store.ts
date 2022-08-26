import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

// OR TYPEOF STORE.STATE IF IS NOT USING COMBINED REDUCERS;

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export { store };
