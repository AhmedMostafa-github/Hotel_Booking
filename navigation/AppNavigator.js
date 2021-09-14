import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Auth from "../screens/auth/auth";
import Home from "../screens/home/home";
import StartupScreen from "../screens/starts/StartupScreen";
import Bookings from "../screens/profile/Bookings";
import Profile from "../screens/profile/Profile";

const Stack = createStackNavigator();

export const ProfileStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Bookings" component={Bookings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

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
