import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { useDispatch } from "react-redux";

import Tabs from "../../components/App/profile/Tabs";
import Card from "../../components/UI/card";
import Colors from "../../constants/Colors";
import images from "../../constants/images";
import * as authActions from "../../store/actions/auth";

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.mainCont}>
      <View style={styles.cont}>
        <View style={styles.infoCont}>
          <View style={styles.imageProfileCont}>
            <Image source={images.profile} style={styles.imageProfile} />
          </View>
          <TouchableOpacity style={styles.cameraCont}>
            <Image source={images.camera} style={styles.cameraIcon} />
          </TouchableOpacity>
          <Text style={styles.name}>Tokyo Bronks</Text>
          <Text style={styles.des}>Indonesia</Text>
          <View style={styles.cardCont}>
            <Card style={styles.card}>
              <View style={styles.numCont}>
                <Text style={styles.num}>47</Text>
                <Text style={styles.num}>75</Text>
                <Text style={styles.num}>22</Text>
              </View>
              <View style={styles.textCont}>
                <Text style={styles.text}>Reviews</Text>
                <Text style={styles.text}>Transactions</Text>
                <Text style={styles.text}>Bookings</Text>
              </View>
            </Card>
          </View>
        </View>
        <View style={styles.tabsCont}>
          <Text style={styles.optWord}>Options</Text>
          <Tabs arrow text="User Settings" source={images.award} />
          <Tabs
            text="Logout"
            source={images.logOut}
            onPress={() => dispatch(authActions.logout())}
          />
          <Tabs
            arrow
            text="Bookings"
            source={images.success}
            onPress={() => navigation.navigate("Bookings")}
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainCont: {
    backgroundColor: Colors.accent,
    flex: 1,
  },
  cont: {
    width: "90%",
    alignSelf: "center",
  },
  infoCont: {
    height: "56.5%",
    alignItems: "center",
    paddingTop: "15%",
  },
  imageProfileCont: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    overflow: "hidden",
  },
  imageProfile: {
    height: "100%",
    width: "100%",
  },
  cameraCont: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    overflow: "hidden",
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 2,
    bottom: 0,
    left: 210,
    top: 125,
    right: 0,
    position: "absolute",
  },
  cameraIcon: {
    height: "55%",
    width: "55%",
    resizeMode: "contain",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  des: {
    fontSize: 16,
    color: "#3E3E3E66",
    marginTop: 5,
  },
  cardCont: {
    height: "43.5%",
    width: "100%",
    justifyContent: "flex-end",
  },
  card: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  numCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 7,
    width: "97%",
    marginBottom: 15,
  },
  num: {
    fontSize: 28,
    color: Colors.primary,
    fontWeight: "bold",
  },
  textCont: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 14,
    color: Colors.sText,
  },
  tabsCont: {
    height: "40%",
  },
  optWord: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: "9%",
    marginBottom: 2,
  },
});
