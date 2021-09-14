import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import Colors from "../../constants/Colors";
import images from "../../constants/images";
import { HomeTab } from "../../navigation/TopTab";
import ChooseModal from "../../components/App/modal/successOrFailModal";
import BookModal from "../../components/App/modal/bookModal";

const home = () => {
  const [bookModal, setBookModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [failModal, setFailModal] = useState(false);

  return (
    <View style={styles.mainCont}>
      <TouchableOpacity
        style={styles.iconCont}
        onPress={() => setBookModal(true)}
      >
        <Image source={images.award} style={styles.icon} />
      </TouchableOpacity>

      <BookModal
        visible={bookModal}
        onPress={() => {
          setBookModal(false);
          setSuccessModal(true);
        }}
      />

      <ChooseModal
        visible={successModal}
        source={images.lSuccess}
        title="Transaction Success"
        des="Congratulations! You can see your bookings in the booking section. Enjoy your trip!"
        text="Back To Home"
        onPress={() => {
          setSuccessModal(false);
          setFailModal(true);
        }}
      />

      <ChooseModal
        visible={failModal}
        source={images.failed}
        title="Transaction Failed"
        des="Please check your internet connection and try again in a moments. Good luck!"
        text="Try Again"
        onPress={() => {
          setFailModal(false);
        }}
      />

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
