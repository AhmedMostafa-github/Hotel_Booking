import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Colors from "../../constants/Colors";
import images from "../../constants/images";
import { HomeTab } from "../../navigation/TopTab";

const home = () => {
  return (
    <View style={{ backgroundColor: Colors.accent, height: "100%" }}>
      <View
        style={{
          width: 27,
          height: 27,
          marginTop: "15%",
          alignSelf: "flex-end",
          marginRight: "10%",
        }}
      >
        <Image
          source={images.award}
          style={{ flex: 1, resizeMode: "contain" }}
        />
      </View>
      <View
        style={{
          marginLeft: "5%",
        }}
      >
        <Text style={{ fontSize: 28 }}>Good Morning, </Text>
        <Text style={{ fontSize: 28 }}>Stephanie! </Text>
      </View>
      <View style={{ flex: 1, paddingTop: "10%" }}>
        <HomeTab />
      </View>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({});
