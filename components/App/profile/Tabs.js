import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import Card from "../../UI/card";
import images from "../../../constants/images";

const Tabs = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Card style={styles.card}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.iconCont}>
            <Image source={props.source} style={styles.icon} />
          </View>
          <Text style={styles.text}>{props.text}</Text>
        </View>
        {props.arrow && (
          <View>
            <View style={styles.arrowCont}>
              <Image source={images.arrow} style={styles.arrow} />
            </View>
          </View>
        )}
      </Card>
    </TouchableOpacity>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    paddingVertical: 15,
    paddingLeft: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    justifyContent: "space-between",
  },
  iconCont: {
    width: 25,
    height: 25,
  },
  icon: {
    flex: 1,
    resizeMode: "contain",
  },
  text: {
    fontSize: 16,
    marginLeft: 25,
  },
  arrowCont: {
    width: 17,
    height: 17,
    marginRight: 15,
  },
  arrow: {
    flex: 1,
    resizeMode: "contain",
  },
});
