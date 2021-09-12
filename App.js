import React from "react";
import { StyleSheet, Text, View } from "react-native";

import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

import Onbording from "./screens/onbording";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <AppNavigator />
    </View>
  );
}
