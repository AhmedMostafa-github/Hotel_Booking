import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, View, Image } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import Colors from "../../constants/Colors";
import images from "../../constants/images";
import { AuthTab } from "../../navigation/TopTab";
import Onbording from "../starts/onbording";

const auth = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  // this func for make onbording display first time only and hold this in asyncStorage
  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  return (
    <ScrollView>
      <View style={{ backgroundColor: Colors.accent, height: "100%" }}>
        <View style={styles.logoCont}>
          <Image source={images.logo} style={styles.logo} />
        </View>
        <Onbording
          visible={isFirstLaunch}
          onClick={() => setIsFirstLaunch(false)}
        />
        <AuthTab />
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
