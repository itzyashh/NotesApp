import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Form = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <TextInput />
      <Text>{description}</Text>
      <TextInput />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: { borderWidth: 1, borderColor: "green", marginTop: 60 },
});
