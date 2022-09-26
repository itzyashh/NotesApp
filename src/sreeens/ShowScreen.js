import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import BlogContext from "../context/BlogContext";

const ShowScreen = ({ route }) => {
  const id = route.params.id;
  const { data } = useContext(BlogContext);

  const blogPost = data.find((r) => r.id === id);

  return (
    <View>
      <Text>{id}</Text>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.description}</Text>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({});
