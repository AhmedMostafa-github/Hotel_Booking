import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/auth/login";
import SignUp from "../screens/auth/signup";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default AppNavigator;
