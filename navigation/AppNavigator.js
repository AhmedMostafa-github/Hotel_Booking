import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Auth from "../screens/auth/auth";
import Home from "../screens/home/home";
import StartupScreen from "../screens/starts/StartupScreen";
import Bookings from "../screens/profile/Bookings";
import Profile from "../screens/profile/Profile";
import HotelDetailScreen from "../screens/home/hotelDetailScreen";
import Colors from "../constants/Colors";
import onbording from "../screens/starts/onbording";

const Stack = createStackNavigator();

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

export const StartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="onbording"
        component={onbording}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  const logginState = useSelector((state) => state.auth.isLoggedin);
  const didTrytoAutoLogin = useSelector(
    (state) => state.auth.didTrytoAutoLogin
  );

  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <NavigationContainer>
        <StartStack />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        {logginState && <HomeStack />}
        {!logginState && didTrytoAutoLogin && <Auth />}
        {!logginState && !didTrytoAutoLogin && <StartupScreen />}
      </NavigationContainer>
    );
  }
};

export default AppNavigator;
