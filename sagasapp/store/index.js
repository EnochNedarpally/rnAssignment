
import createSagaMiddleware from "@redux-saga/core";
import {reducers} from './../reducres';
import {  configureStore } from "@reduxjs/toolkit";
import rootSaga  from "../effects";
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]


export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(middleware),
});


sagaMiddleware.run(rootSaga);

