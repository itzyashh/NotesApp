import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useHeader from "../hooks/useHeader";
import Form from "../components/Form";

const CreateScreen = ({ navigation }) => {
  useHeader({ navigation });

  return (
    <View style={styles.container}>
      <Form title="Tile" description="Description" />
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
