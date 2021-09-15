import React, { useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Colors from "../../constants/Colors";
import * as authActions from "../../store/actions/auth";

const StartupScreen = (props) => {
  const dispatch = useDispatch();

  //this screen handle all of the app to see if the toke is available to open app or not

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem("userData");
      dispatch(authActions.setDidTryAL());

      if (userData === null) {
        return;
      }
      const transformedData = JSON.parse(userData);
      const { token, userId } = transformedData;
      if (!token || !userId) {
        dispatch(authActions.setDidTryAL());
        return;
      }
      dispatch(authActions.authenticate(userId, token));
    };
    tryLogin();
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartupScreen;
