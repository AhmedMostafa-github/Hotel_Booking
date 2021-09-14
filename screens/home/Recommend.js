import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

import axios from "axios";
import Card from "../../components/UI/card";
import Colors from "../../constants/Colors";
import images from "../../constants/images";

const Recommend = () => {
  const [data, setData] = useState([
    {
      id: "1",
      hotel: "Tropicasa De Hotel",
      address: "Amsterdam, Netherlands",
      rating: "4.5",
      image:
        "https://media.hrs.com/media/image/8c/c2/11/The_Principal_Manchester-Manchester-Junior-Suite-67582_600x600@2x.jpg",
    },
    {
      id: "2",
      hotel: "Tropicasa De Hotel",
      address: "Amsterdam, Netherlands",
      rating: "3",
      image:
        "https://malhotragroup.co.uk/wp-content/uploads/2020/09/3_mile_inn_great_north_hotel-122-scaled.jpg",
    },
  ]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1000&types=hotels&name=hilton&key=AIzaSyBXd0FXMkiHno3r-eGBgkUqaFzDDvJs9Fw"
  //     )
  //     .then((res) => {
  //       setId(res.data.results.map((result) => result.place_id));
  //       // console.log(id);
  //       setData(res.data.results.map((result) => result.name));
  //       setApi(res.data.results);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <View>
      <FlatList
        horizontal={true}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <View style={styles.mainCont}>
            <Card style={styles.card}>
              <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() => console.log("ahmed")}
              >
                <ImageBackground
                  source={{ uri: itemData.item.image }}
                  style={{ flex: 1 }}
                >
                  <View style={styles.starCont}>
                    <Image source={images.star} style={styles.starIcon} />
                    <Text style={styles.rate}>{itemData.item.rating}</Text>
                  </View>
                  <View style={styles.infoCont}>
                    <Text style={styles.hotel}>{itemData.item.hotel}</Text>
                    <Text style={styles.address}>{itemData.item.address}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </Card>
          </View>
        )}
      />
    </View>
  );
};

export default Recommend;

const styles = StyleSheet.create({
  mainCont: {
    height: Dimensions.get("window").height * 0.8,
    backgroundColor: Colors.accent,
  },
  starCont: {
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0.4)",
    alignSelf: "flex-end",
    margin: 15,
    borderRadius: 20,
    padding: 7,
    alignItems: "center",
  },
  starIcon: {
    width: "12%",
    height: "75%",
    resizeMode: "contain",
  },
  rate: {
    color: "white",
    marginLeft: 5,
    paddingRight: 10,
  },
  card: {
    height: Dimensions.get("window").height * 0.53,
    width: Dimensions.get("window").width * 0.6,
    marginHorizontal: 15,
    marginTop: 30,
    overflow: "hidden",
  },
  infoCont: {
    justifyContent: "flex-end",
    flex: 1,
  },
  hotel: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    lineHeight: 35,
    backgroundColor: "rgba(0,0,0,0.3)",
    paddingLeft: 25,
  },
  address: {
    fontSize: 14,
    color: "#FFFFFFCC",
    lineHeight: 30,
    backgroundColor: "rgba(0,0,0,0.3)",
    paddingLeft: 25,
  },
});
