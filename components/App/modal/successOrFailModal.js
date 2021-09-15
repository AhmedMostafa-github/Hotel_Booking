import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Modal from "../../UI/Modal";
import images from "../../../constants/images";
import Colors from "../../../constants/Colors";
import Button from "../../UI/Button";

//so success and fail same design but different assets so this mission of props here

const successOrFailModal = (props) => {
  return (
    <Modal visible={props.visible}>
      <View style={styles.mainCont}>
        <View style={styles.indicatorCont}>
          <Image source={images.indicator} style={styles.indicatorIcon} />
        </View>
        <View style={styles.statusIconCont}>
          <Image source={props.source} style={styles.statusIcon} />
        </View>
        <View style={styles.textCont}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.des}>{props.des}</Text>
          <Button text={props.text} width="100%" onPress={props.onPress} />
        </View>
      </View>
    </Modal>
  );
};

export default successOrFailModal;

const styles = StyleSheet.create({
  mainCont: {
    height: "65%",
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    overflow: "hidden",
  },
  indicatorCont: {
    alignItems: "center",
    paddingTop: 10,
  },
  indicatorIcon: {
    width: "40%",
    resizeMode: "contain",
  },
  statusIconCont: {
    alignItems: "center",
    paddingTop: 25,
    height: "30%",
  },
  statusIcon: {
    width: "50%",
    height: "100%",
    resizeMode: "contain",
  },
  textCont: {
    width: "90%",
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: "12%",
  },
  des: {
    fontSize: 16,
    marginVertical: "8%",
    color: Colors.sText,
  },
});
