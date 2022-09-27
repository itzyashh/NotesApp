import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import BlogContext from "../context/BlogContext";
import Card from "../components/Card";
import { AntDesign } from "react-native-vector-icons";
import useHeader from "../hooks/useHeader";
import pixels from "../api/pixels";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

const IndexScreen = ({ navigation }) => {
  const { data } = useContext(BlogContext);
  const [images, setImages] = useState([]);
  const placeholder = "https://via.placeholder.com/400 ";
  const searhApi = async () => {
    const res = await pixels.get("/search", {
      params: {
        query: "blue living room",
        per_page: 15,
      },
    });
    return res.data.photos[8];
  };
  const date = new Date();
  let hrs = date.getHours();

  let greet;
  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";
  const [month, day, year] = [
    date.toDateString(),
    date.getDate(),
    date.getFullYear(),
  ];
  // images.forEach((image) => console.log(image.src.original));

  useEffect(() => {
    searhApi().then((i) => {
      setImages(i);
    });
  }, []);

  useHeader({
    navigation,
    Icon: AntDesign,
    Iconname: "plus",
    routeName: "Create",
  });

  return (
    <>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={{
              uri: images.src?.original,
            }}
          />
          <Text style={styles.greetings}>{greet}</Text>
          <Text style={styles.date}>{month}</Text>
        </View>
        <Text style={styles.title}>Blogs</Text>
        <FlatList
          data={data}
          keyExtractor={(blogPost) => blogPost.id}
          renderItem={({ item }) => {
            return (
              <Card title={item.title} id={item.id} navigation={navigation} />
            );
          }}
        />
      </View>
    </>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4EEFF",
  },
  imgContainer: {
    marginVertical: 25,
    borderRadius: 12,
    marginHorizontal: 15,
  },
  img: {
    borderRadius: 12,
    alignSelf: "center",
    height: responsiveHeight(26),
    width: responsiveWidth(93),
  },
  title: {
    marginHorizontal: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
  greetings: {
    position: "absolute",
    bottom: 40,
    left: 22,
    fontSize: 24,
    fontWeight: "700",
    color: "#F4EEFF",
  },
  date: {
    position: "absolute",
    bottom: 18,
    left: 18,
    fontSize: 16,
    color: "white",
    fontWeight: "500",
    opacity: 0.8,
  },
});
