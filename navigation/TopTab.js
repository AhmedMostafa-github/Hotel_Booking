import React, { useState } from "react";
import { View } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Colors from "../constants/Colors";
import Login from "../screens/auth/login";
import Signup from "../screens/auth/signup";

const TabTop = createMaterialTopTabNavigator();

const topTobStyle = {
  labelStyle: { fontSize: 20, textTransform: "none" },
  style: {
    backgroundColor: "white",
    width: "100%",
    alignSelf: "center",
  },
  activeTintColor: "black",
  inactiveTintColor: "#A9A9A9",
  indicatorStyle: {
    backgroundColor: Colors.primary,
    height: "7%",
  },
};

const DefaultScreen = () => (
  <View style={{ flex: 1, backgroundColor: "white" }} />
);

export const TopTab = () => {
  const [activeTab, setActiveTab] = useState("Login");
  return (
    <TabTop.Navigator tabBarOptions={topTobStyle}>
      <TabTop.Screen
        name="Log In"
        component={activeTab === "Login" ? Login : DefaultScreen}
        listeners={{ focus: () => setActiveTab("Login") }}
      />
      <TabTop.Screen
        name="Sign Up"
        component={activeTab === "Signup" ? Signup : DefaultScreen}
        listeners={{ focus: () => setActiveTab("Signup") }}
      />
    </TabTop.Navigator>
  );
};
