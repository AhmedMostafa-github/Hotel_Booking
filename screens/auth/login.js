import React from "react";
import { StyleSheet, Text, View } from "react-native";

import * as Yup from "yup";

import Colors from "../../constants/Colors";
import AppForm from "../../components/App/Form/AppForm";
import AppFormek from "../../components/App/Form/AppFormek";

const login = () => {
  return (
    <View
      style={{ height: "100%", width: "95%", backgroundColor: Colors.accent }}
    >
      <Text style={{ fontSize: 16 }}> Username or E-mail</Text>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({});
