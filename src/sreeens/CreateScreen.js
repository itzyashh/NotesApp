import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import useHeader from "../hooks/useHeader";
import Form from "../components/Form";
import BlogContext from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);
  useHeader({ navigation });

  return (
    <View style={styles.container}>
      <Form
        label={{ title: "Title", description: "Description" }}
        onSave={(title, description) => addBlogPost(title, description)}
      />
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
