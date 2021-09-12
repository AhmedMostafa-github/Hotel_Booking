import React from "react";
import { StyleSheet, ScrollView, View, Image } from "react-native";

import Colors from "../../constants/Colors";
import images from "../../constants/images";
import { TopTab } from "../../navigation/TopTab";

const auth = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: Colors.accent, height: "100%" }}>
        <View style={styles.logoCont}>
          <Image source={images.logo} style={styles.logo} />
        </View>
        <TopTab />
      </View>
    </ScrollView>
  );
};

export default auth;

const styles = StyleSheet.create({
  logoCont: {
    width: "100%",
    height: 150,
    alignItems: "center",
    backgroundColor: Colors.accent,
    paddingTop: "10%",
    paddingBottom: "10%",
  },
  logo: { resizeMode: "contain", flex: 1 },
});
