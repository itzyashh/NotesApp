import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import BlogContext from "../context/BlogContext";
import useHeader from "../hooks/useHeader";
import { Feather } from "react-native-vector-icons";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

const ShowScreen = ({ route, navigation }) => {
  const id = route.params.id;
  const { data } = useContext(BlogContext);
  const blogPost = data.find((r) => r.id === id);
  useHeader({
    navigation,
    Icon: Feather,
    Iconname: "edit-3",
    routeName: "Edit",
    id: id,
    headerTitle: blogPost.title,
  });

  return (
    <>
      <View style={styles.screen}>
        <Text style={styles.blogPostTitle}>{blogPost.title}</Text>
        <View style={styles.container}>
          <Text style={styles.blogPostDescription}>{blogPost.description}</Text>
        </View>
      </View>
    </>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F4EEFF",
  },
  blogPostTitle: {
    color: "#424874",
    padding: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  blogPostDescription: {
    paddingTop: 12,
    color: "#424874",
    paddingLeft: 12,
  },
  container: {
    height: responsiveHeight(100),
    borderRadius: 12,
    backgroundColor: "#DCD6F7",
  },
});
