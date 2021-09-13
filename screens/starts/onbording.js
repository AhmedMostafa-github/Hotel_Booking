//importing main libraries
import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

//import needed component
import images from "../../constants/images";
import Button from "../../components/UI/Button";
import Colors from "../../constants/Colors";

const onbording = () => {
  return (
    <View>
      <View style={styles.imageCont}>
        <Image source={images.onbording} style={styles.image} />
      </View>
      <View style={styles.textCont}>
        <Text style={styles.titleText}>Travel with no worry</Text>
        <Text
          style={{
            fontSize: 16,
            color: Colors.sText,
          }}
        >
          You can now experience the next level travel
        </Text>
        <Text style={styles.sDes}>experience for hotel bookings.</Text>
      </View>
      <Button
        text="Next"
        width="40%"
        height={Dimensions.get("screen").height * 0.12}
        design={styles.button}
        style={styles.buttonText}
      />
    </View>
  );
};

export default onbording;

const styles = StyleSheet.create({
  imageCont: {
    marginTop: "5%",
    height: Dimensions.get("window").height / 1.6,
    width: "85%",
    right: 1.5,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  textCont: { paddingLeft: "6%" },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: "5%",
    paddingBottom: "3%",
  },
  sDes: {
    fontSize: 16,
    color: Colors.sText,
    paddingTop: "1.5%",
  },
  button: {
    justifyContent: "flex-end",
  },
  buttonText: {
    paddingVertical: 16,
  },
});
