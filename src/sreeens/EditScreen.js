import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import Form from "../components/Form";
import BlogContext from "../context/BlogContext";

const EditScreen = ({ route, navigation }) => {
  const id = route.params.id;
  const { data, editBlogPost } = useContext(BlogContext);
  const blogPost = data.find((r) => r.id === id);
  return (
    <View>
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

const styles = StyleSheet.create({});
