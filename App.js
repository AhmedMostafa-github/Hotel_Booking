import React, { useState, useEffect } from "react";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

import Onbording from "./screens/starts/onbording";
import AppNavigator from "./navigation/AppNavigator";
import authReducer from "./store/reducers/auth";
import { StartStack } from "./navigation/AppNavigator";

export const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <AppNavigator />
    </Provider>
  );
}
