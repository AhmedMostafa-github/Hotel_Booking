import React from "react";
import { StyleSheet, View } from "react-native";

//props children to accept anything that will be inside the card
const Card = (props) => {
  return <View style={[styles.card, props.style]}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    alignSelf: "center",
  },
});
