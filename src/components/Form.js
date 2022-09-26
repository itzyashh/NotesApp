import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const Form = ({ label, onSave }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <View style={styles.container}>
      <Text>{label.title}</Text>
      <TextInput value={title} onChangeText={(e) => setTitle(e)} />
      <Text>{label.description}</Text>
      <TextInput value={description} onChangeText={(e) => setDescription(e)} />
      <Button title="save" onPress={() => onSave(title, description)} />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: { borderWidth: 1, borderColor: "green", marginTop: 60 },
});
