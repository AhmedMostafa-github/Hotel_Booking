import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import { Entypo } from "@expo/vector-icons";

import Colors from "../../constants/Colors";

const Input = (props) => {
  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.sectionStyle}>
        <TextInput {...props} style={[styles.input, props.style]} />
        {props.pass && (
          <TouchableOpacity onPress={props.onPress}>
            <Entypo
              name={props.pass}
              size={17}
              color={Colors.primary}
              style={[styles.imageStyle, props.design]}
            />
          </TouchableOpacity>
        )}
        {props.check && (
          <Image
            source={require("../../assets/image/checkMark.png")}
            style={styles.check}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    width: "100%",
    marginTop: 30,
  },
  label: {
    top: -17,
    left: 17,
    position: "absolute",
    backgroundColor: "#FFF",
    padding: 5,
    zIndex: 50,
    color: "#474747",
  },
  input: {
    paddingHorizontal: 21,
    paddingVertical: 9,
    flex: 1,
  },
  sectionStyle: {
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 12,

    borderColor: Colors.third,
    color: Colors.accent,
    backgroundColor: "white",
  },
  imageStyle: {
    alignSelf: "center",
    paddingVertical: 13,
  },
  check: {
    alignSelf: "center",
    marginRight: 13,
  },
});

export default Input;
