import React, { useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";

import Card from "../../components/UI/card";
import Colors from "../../constants/Colors";
import images from "../../constants/images";

const Bookings = () => {
  //this static data to render flatList
  const [data, setData] = useState([
    {
      id: "1",
      hotel: "Tropicasa De Hotel",
      address: "Amsterdam, Netherlands",
      startDate: "22/1/2020",
      endDate: "25/1/2020",
    },
    {
      id: "2",
      hotel: "Tropicasa De Hotel",
      address: "Amsterdam, Netherlands",
      startDate: "22/1/2020",
      endDate: "25/1/2020",
    },
    {
      id: "3",
      hotel: "Tropicasa De Hotel",
      address: "Amsterdam, Netherlands",
      startDate: "22/1/2020",
      endDate: "25/1/2020",
    },
  ]);
  return (
    <View style={styles.mainCont}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <Card style={styles.card}>
            <View style={styles.leftCont}>
              <View style={styles.imageCont}>
                <Image source={images.hotel} style={styles.image} />
              </View>
            </View>
            <View style={styles.textCont}>
              <Text style={styles.title}>{itemData.item.hotel}</Text>
              <Text style={styles.address}>{itemData.item.address}</Text>
              <Text style={{ fontSize: 14 }}>
                `from ${itemData.item.startDate} To ${itemData.item.endDate} `
              </Text>
            </View>
          </Card>
        )}
      />
    </View>
  );
};

export default Bookings;

const styles = StyleSheet.create({
  mainCont: {
    backgroundColor: Colors.accent,
    flex: 1,
    paddingTop: 7,
  },
  card: {
    width: "90%",
    marginTop: 20,
    flexDirection: "row",
  },
  leftCont: {
    width: "40%",
    marginLeft: 17,
  },
  imageCont: {
    width: 115,
    height: 115,
    marginVertical: "8%",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 15,
    overflow: "hidden",
  },
  textCont: {
    width: "60%",
    height: 100,
    justifyContent: "space-between",
    alignSelf: "center",
    right: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  address: {
    fontSize: 14,
    color: Colors.sText,
  },
});
