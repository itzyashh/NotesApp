import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import BlogContext from "../context/BlogContext";
import Card from "../components/Card";
import { AntDesign } from "react-native-vector-icons";
import useHeader from "../hooks/useHeader";

const IndexScreen = ({ navigation }) => {
  const { data } = useContext(BlogContext);

  useHeader({ navigation, Icon: AntDesign, Iconname: "plus" });

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(blogPosts) => blogPosts.title}
        renderItem={({ item }) => {
          return <Card title={item.title} />;
        }}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4EEFF",
  },
});
