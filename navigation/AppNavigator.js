import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Auth from "../screens/auth/auth";
import Home from "../screens/home/home";
import StartupScreen from "../screens/starts/StartupScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const logginState = useSelector((state) => state.auth.isLoggedin);
  const didTrytoAutoLogin = useSelector(
    (state) => state.auth.didTrytoAutoLogin
  );
  return (
    <NavigationContainer>
      {logginState && <Home />}
      {!logginState && didTrytoAutoLogin && <Auth />}
      {!logginState && !didTrytoAutoLogin && <StartupScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
