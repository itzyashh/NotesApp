import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import Form from "../components/Form";
import BlogContext from "../context/BlogContext";
import useHeader from "../hooks/useHeader";

const EditScreen = ({ route, navigation }) => {
  const id = route.params.id;
  const { data, editBlogPost } = useContext(BlogContext);
  const blogPost = data.find((r) => r.id === id);
  useHeader({ navigation });
  return (
    <View style={styles.container}>
      <Form
        id={blogPost.id}
        initialState={{
          title: blogPost.title,
          description: blogPost.description,
        }}
        label={{ title: "Edit Title", description: "Edit Description" }}
        onSave={(title, description) =>
          editBlogPost(id, title, description, () => navigation.pop())
        }
      />
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCD6F7",
  },
});
