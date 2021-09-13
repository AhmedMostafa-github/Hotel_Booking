import React, { useState } from "react";
import { View } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Colors from "../constants/Colors";
import Login from "../screens/auth/login";
import Signup from "../screens/auth/signup";
import Recommend from "../screens/home/Recommend";
import Popular from "../screens/home/Popular";
import Trending from "../screens/home/Trending";

const TabTop = createMaterialTopTabNavigator();

const DefaultScreen = () => (
  <View style={{ flex: 1, backgroundColor: "white" }} />
);

const authTobStyle = {
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

export const AuthTab = () => {
  const [activeTab, setActiveTab] = useState("Login");
  return (
    <TabTop.Navigator tabBarOptions={authTobStyle}>
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

const homeTobStyle = {
  labelStyle: { fontSize: 18, textTransform: "none" },
  style: {
    backgroundColor: Colors.accent,
    width: "100%",
    alignSelf: "center",
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  activeTintColor: "black",
  inactiveTintColor: "#A9A9A9",
  indicatorStyle: {
    backgroundColor: Colors.primary,
    height: 8,
    width: 8,
    borderRadius: 4,
    marginLeft: 65,
  },
};

export const HomeTab = () => {
  const [activeTab, setActiveTab] = useState("Recommend");
  return (
    <TabTop.Navigator tabBarOptions={homeTobStyle}>
      <TabTop.Screen
        name="Recommend"
        component={activeTab === "Recommend" ? Recommend : DefaultScreen}
        listeners={{ focus: () => setActiveTab("Recommend") }}
      />
      <TabTop.Screen
        name="Popular"
        component={activeTab === "Popular" ? Popular : DefaultScreen}
        listeners={{ focus: () => setActiveTab("Popular") }}
      />
      <TabTop.Screen
        name="Trending"
        component={activeTab === "Trending" ? Trending : DefaultScreen}
        listeners={{ focus: () => setActiveTab("Trending") }}
      />
    </TabTop.Navigator>
  );
};
