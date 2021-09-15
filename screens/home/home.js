import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import Colors from "../../constants/Colors";
import images from "../../constants/images";
import { HomeTab } from "../../navigation/TopTab";

const home = ({ navigation }) => {
  return (
    <View style={styles.mainCont}>
      <TouchableOpacity
        style={styles.iconCont}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image source={images.award} style={styles.icon} />
      </TouchableOpacity>

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

const styles = StyleSheet.create({
  mainCont: {
    backgroundColor: Colors.accent,
    height: "100%",
  },
  iconCont: {
    width: 27,
    height: 27,
    marginTop: "15%",
    alignSelf: "flex-end",
    marginRight: "10%",
  },
  icon: {
    flex: 1,
    resizeMode: "contain",
  },
});
