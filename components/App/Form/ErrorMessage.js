import React from "react";
import { View, Text, StyleSheet } from "react-native";

//this component is showing errors which is happend based on validationSchema

const ErrorMessage = (props) => {
  if (!props.visible || !props.error) return null;

  return (
    <View>
      <Text style={styles.errorsMsg}>{props.error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorsMsg: {
    color: "#FF2400",
    textAlign: "left",
    paddingLeft: 15,
  },
});

export default ErrorMessage;
