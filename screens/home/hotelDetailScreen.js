import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Card from "../../components/UI/card";
import Colors from "../../constants/Colors";
import images from "../../constants/images";
import Button from "../../components/UI/Button";

const hotelDetailScreen = (props) => {
  const hotel = props.route.params.hotel;
  const address = props.route.params.address;
  const rating = props.route.params.rating;
  const image = props.route.params.image;
  return (
    <View style={{ flex: 1, backgroundColor: Colors.accent }}>
      <Card style={styles.card}>
        <View style={{ justifyContent: "center" }}>
          <Image
            source={{ uri: image }}
            style={{
              width: 125,
              height: 125,
              borderRadius: 15,
              marginVertical: "10%",
              overflow: "hidden",
              marginLeft: 20,
            }}
          />
        </View>
        <View
          style={{
            justifyContent: "space-between",
            marginLeft: "4%",
            paddingVertical: "6%",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{hotel}</Text>
          <Text style={{ color: Colors.sText }}>{address}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              bottom: 9,
            }}
          >
            <Image
              source={images.star}
              style={{ width: "12%", height: "75%", resizeMode: "contain" }}
            />
            <Text style={{ color: "#FD9942", right: 7 }}>{rating}</Text>
            <Text style={{ color: Colors.sText }}>(1763 Reviews)</Text>
          </View>
        </View>
      </Card>
      <View style={{ width: "90%", alignSelf: "center", marginTop: "7%" }}>
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
      <Button text="Book" width="40%" />
    </View>
  );
};

export default hotelDetailScreen;

const styles = StyleSheet.create({
  card: {
    width: "90%",
    marginTop: "5%",
    flexDirection: "row",
  },
});
