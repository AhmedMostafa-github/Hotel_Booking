import React from "react";
import { StyleSheet, View, Modal } from "react-native";

const modal = (props) => {
  return (
    <Modal animationType="slide" transparent={true} visible={props.visible}>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        {props.children}
      </View>
    </Modal>
  );
};

export default modal;

const styles = StyleSheet.create({});
