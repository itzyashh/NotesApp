import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import BlogContext from "../context/BlogContext";
import useHeader from "../hooks/useHeader";
import { Feather } from "react-native-vector-icons";

const ShowScreen = ({ route, navigation }) => {
  const id = route.params.id;
  const { data } = useContext(BlogContext);
  useHeader({
    navigation,
    Icon: Feather,
    Iconname: "edit-3",
    routeName: "Edit",
    id: id,
  });

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
