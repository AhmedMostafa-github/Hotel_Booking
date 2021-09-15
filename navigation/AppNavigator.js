import React from "react";

import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Auth from "../screens/auth/auth";
import Home from "../screens/home/home";
import StartupScreen from "../screens/starts/StartupScreen";
import Bookings from "../screens/profile/Bookings";
import Profile from "../screens/profile/Profile";
import HotelDetailScreen from "../screens/home/hotelDetailScreen";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

//this stack for connect all screens inside the app together

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HotelDetailScreen"
        component={HotelDetailScreen}
        options={{
          title: "Description",
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            backgroundColor: Colors.accent,
          },
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Bookings" component={Bookings} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  const logginState = useSelector((state) => state.auth.isLoggedin);
  const didTrytoAutoLogin = useSelector(
    (state) => state.auth.didTrytoAutoLogin
  );

  //this condition to see the status of the app to see which stack or screen will redner in different Situations
  return (
    <NavigationContainer>
      {logginState && <HomeStack />}
      {!logginState && didTrytoAutoLogin && <Auth />}
      {!logginState && !didTrytoAutoLogin && <StartupScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
