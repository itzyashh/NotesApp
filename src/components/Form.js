import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useState } from "react";
import BlogContext from "../context/BlogContext";

const Form = ({ label, onSave, initialState, id }) => {
  const { data } = useContext(BlogContext);
  const [title, setTitle] = useState(initialState.title);
  const [description, setDescription] = useState(initialState.description);
  let blogPost = {};
  id ? (blogPost = blogPost = data.find((r) => r.id === id)) : null;
  return (
    <View style={styles.container}>
      <Text>{label.title}</Text>
      <TextInput value={title} onChangeText={(e) => setTitle(e)} />
      <Text>{label.description}</Text>
      <TextInput value={description} onChangeText={(e) => setDescription(e)} />

      {(title.length > 0 && title !== blogPost.title) ||
      (description.length > 0 && description !== blogPost.description) ? (
        <Button title="save" onPress={() => onSave(title, description)} />
      ) : null}
    </View>
  );
};

Form.defaultProps = {
  id: null,
  initialState: { title: "", description: "" },
};
export default Form;

const styles = StyleSheet.create({
  container: { borderWidth: 1, borderColor: "green", marginTop: 60 },
});
