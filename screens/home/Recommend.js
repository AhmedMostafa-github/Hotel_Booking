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

const trncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};

const Recommend = (props) => {
  const [data, setData] = useState([]);
  const Ahmed = [
    {
      id: 1,
      url: "https://media.hrs.com/media/image/8c/c2/11/The_Principal_Manchester-Manchester-Junior-Suite-67582_600x600@2x.jpg",
    },
    {
      id: 2,
      url: "https://cms.qz.com/wp-content/uploads/2020/07/Wythe-Exterior.jpg?quality=75&strip=all&w=1600&h=900&crop=1",
    },
  ];

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const res = await axios.get(
          "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=900&types=hotels&name=hilton&key=AIzaSyBXd0FXMkiHno3r-eGBgkUqaFzDDvJs9Fw"
        );
        const data = res.data;
        const test = data.results.map((item, index) => {
          let currentObj;
          for (const key in item) {
            item["Dawly"] = Ahmed.map((item) => item.url)[index];
            currentObj = item;
          }
          return currentObj;
        });
        setData(data.results);
        console.log(test);
      } catch (error) {
        console.log(error);
      }
    };
    handleFetch();
  }, []);

  const selectItemHandler = (id, hotel, address, rating, image) => {
    props.navigation.navigate("HotelDetailScreen", {
      id: id,
      hotel: hotel,
      address: address,
      rating: rating,
      image: image,
    });
  };

  return (
    <View>
      <FlatList
        horizontal={true}
        data={data}
        keyExtractor={(item) => item.place_id}
        renderItem={(itemData) => (
          <View style={styles.mainCont}>
            <Card style={styles.card}>
              <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() =>
                  selectItemHandler(
                    itemData.item.id,
                    itemData.item.name,
                    itemData.item.vicinity,
                    itemData.item.rating,
                    itemData.item.image
                  )
                }
              >
                <ImageBackground
                  key={itemData.item.id}
                  source={{ uri: itemData.item.Dawly }}
                  style={{ flex: 1 }}
                >
                  <View style={styles.starCont}>
                    <Image source={images.star} style={styles.starIcon} />
                    <Text style={styles.rate}>{itemData.item.rating}</Text>
                  </View>
                  <View style={styles.infoCont}>
                    <Text style={styles.hotel}>
                      {trncate(itemData.item.name, 20)}
                    </Text>
                    <Text style={styles.address}>{itemData.item.vicinity}</Text>
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
