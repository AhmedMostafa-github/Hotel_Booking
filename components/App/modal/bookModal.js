import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { Calendar } from "react-native-calendars";

import Modal from "../../UI/Modal";
import images from "../../../constants/images";
import Colors from "../../../constants/Colors";
import Button from "../../UI/Button";

//this modal contian a calender for booking

const bookModal = (props) => {
  return (
    <Modal visible={props.visible}>
      <View style={styles.mainCont}>
        <TouchableOpacity style={styles.indicatorCont}>
          <Image source={images.indicator} style={styles.indicatorIcon} />
        </TouchableOpacity>
        <Calendar
          hideExtraDays={true}
          theme={{ arrowColor: Colors.primary }}
          markingType={"period"}
          markedDates={{
            "2021-09-22": {
              selected: true,
              startingDay: true,
              color: Colors.primary,
            },
            "2021-09-23": {
              selected: true,
              color: "#70d7c7",
            },
            "2021-09-24": {
              selected: true,
              color: "#70d7c7",
            },
            "2021-09-25": {
              selected: true,
              endingDay: true,
              color: Colors.primary,
            },
          }}
        />
        <View style={styles.checkCont}>
          <View>
            <Text style={styles.checkText}>Check In</Text>
            <Text style={styles.date}>May 17</Text>
          </View>
          <Image source={images.cal} style={styles.arrow} />
          <View>
            <Text style={styles.checkText}>Check Out</Text>
            <Text style={styles.date}>May 21</Text>
          </View>
        </View>
        <Button text="Continue" width="85%" onPress={props.onPress} />
      </View>
    </Modal>
  );
};

export default bookModal;

const styles = StyleSheet.create({
  mainCont: {
    height: "85%",
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
  checkCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "75%",
    alignSelf: "center",
    marginVertical: "8%",
  },
  checkText: {
    fontSize: 18,
    color: Colors.sText,
  },
  date: {
    fontSize: 24,
    fontWeight: "bold",
  },
  arrow: {
    width: 15,
    height: 15,
    resizeMode: "contain",
  },
});
