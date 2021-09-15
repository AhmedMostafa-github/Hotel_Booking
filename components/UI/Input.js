import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";

//for input fields

const Input = (props) => {
  return (
    <View style={styles.formControl}>
      <View style={styles.sectionStyle}>
        <TextInput {...props} style={[styles.input, props.style]} />
        {props.pass && (
          <TouchableOpacity onPress={props.onPress}>
            <Feather
              name={props.pass}
              size={24}
              color="#A9A9A9"
              style={[styles.imageStyle, props.design]}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    width: "100%",
    marginTop: 15,
  },

  input: {
    paddingHorizontal: 21,
    paddingVertical: 15,
    flex: 1,
  },
  sectionStyle: {
    flexDirection: "row",
    borderRadius: 27,
    backgroundColor: "white",
  },
  imageStyle: {
    alignSelf: "center",
    paddingVertical: 16,
    marginRight: 15,
  },
});

export default Input;
