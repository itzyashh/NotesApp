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

const IndexScreen = ({ navigation }) => {
  const { data } = useContext(BlogContext);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#A6B1E1" },
      headerTitleStyle: { color: "#424874" },
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Create")}>
          <AntDesign name="plus" size={27} color="#F4EEFF" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

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
