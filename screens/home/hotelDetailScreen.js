import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Card from "../../components/UI/card";
import Colors from "../../constants/Colors";
import images from "../../constants/images";
import Button from "../../components/UI/Button";
import ChooseModal from "../../components/App/modal/successOrFailModal";
import BookModal from "../../components/App/modal/bookModal";

const trncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};

const hotelDetailScreen = (props) => {
  const [bookModal, setBookModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [failModal, setFailModal] = useState(false);

  const hotel = props.route.params.hotel;
  const address = props.route.params.address;
  const rating = props.route.params.rating;
  const image = props.route.params.image;

  return (
    <View style={styles.mainCont}>
      <Card style={styles.card}>
        <View style={{ justifyContent: "center" }}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <View style={styles.detailCont}>
          <Text style={styles.hotel}>{trncate(hotel, 15)}</Text>
          <Text style={{ color: Colors.sText }}>{address}</Text>
          <View style={styles.ratingCont}>
            <Image source={images.star} style={styles.star} />
            <Text style={{ color: "#FD9942", right: 7 }}>{rating}</Text>
            <Text style={{ color: Colors.sText }}>(1763 Reviews)</Text>
          </View>
        </View>
      </Card>
      <View style={styles.descCont}>
        <Text style={{ color: Colors.sText }}>
          Tropicasa De Hotel is high rated hotels with 1000+ reviews and we are
          always maintaning the quality for better rating and high attitude
          service for you. Tropicasa De Hotel located in a strategic location,
          only 6 Km from the airport and 1 Km from the train station. The hotel
          located in the middle of the city so you can enjoy the city and see
          something nearby.You will be welcomed amongst olive trees, citron
          trees and magnolias, in gardens that hide exotic plants and in a
          wonderful outdoor pool with deck chairs.
        </Text>
      </View>
      <View style={styles.buttonCont}>
        <Button text="Book" width="40%" onPress={() => setBookModal(true)} />
      </View>

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
    </View>
  );
};

export default hotelDetailScreen;

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    backgroundColor: Colors.accent,
  },
  card: {
    width: "90%",
    marginTop: "5%",
    flexDirection: "row",
  },
  image: {
    width: 125,
    height: 125,
    borderRadius: 15,
    marginVertical: "10%",
    overflow: "hidden",
    marginLeft: 20,
  },
  detailCont: {
    justifyContent: "space-between",
    marginLeft: "4%",
    paddingVertical: "6%",
  },
  hotel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  ratingCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    bottom: 9,
  },
  star: {
    width: "12%",
    height: "75%",
    resizeMode: "contain",
  },
  descCont: {
    width: "90%",
    alignSelf: "center",
    marginTop: "7%",
  },
  buttonCont: {
    justifyContent: "flex-end",
    flex: 1,
    paddingBottom: "10%",
  },
});
