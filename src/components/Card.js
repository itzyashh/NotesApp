import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Card = ({ title }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 20,
    padding: 24,
    borderRadius: 6,
    backgroundColor: "#DCD6F7",
  },
  text: {
    fontSize: 16,
    color: "#424874",
    fontWeight: "500",
  },
});
