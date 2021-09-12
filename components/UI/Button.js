import React, { FC } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Colors from "../../constants/Colors";

const Button = ({ width, height, text, style, design, disabled, onPress }) => {
  return (
    <View>
      <View style={[styles(width, height).login, design]}>
        <TouchableOpacity onPress={onPress} disabled={disabled}>
          <Text style={[styles(width, height).textLogin, style]}>{text}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Button;

const styles = (width, height) =>
  StyleSheet.create({
    login: {
      height: height,
      width: width,
      alignSelf: "center",
    },
    textLogin: {
      fontSize: 16,
      fontWeight: "bold",
      color: "white",
      borderRadius: 25,
      width: "100%",
      backgroundColor: Colors.primary,
      paddingVertical: 15,
      textAlign: "center",
      overflow: "hidden",
    },
  });
