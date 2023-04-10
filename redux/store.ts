import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import commonSlice from "./reducers/common";
import rootSaga from "./saga";

const sagaMiddlewate = createSagaMiddleware();

export const store = configureStore({
  reducer: { common: commonSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: true,
      immutableCheck: true,
    }).concat(sagaMiddlewate),
});

sagaMiddlewate.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
