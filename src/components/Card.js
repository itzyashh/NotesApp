import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialIcons } from "react-native-vector-icons";

const Card = ({ title, id, navigation }) => {
  return (
    <TouchableOpacity
      style={{
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 20,
      }}
      onPress={() => navigation.navigate("Show", { id })}
    >
      <View style={styles.container}>
        <Text style={styles.text}>
          {title}-{id}
        </Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => console.log("Deleted" + id)}
        >
          <View>
            <MaterialIcons style={styles.icon} name="delete" size={25} />
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    backgroundColor: "#DCD6F7",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    padding: 24,
    fontSize: 16,
    color: "#424874",
    fontWeight: "500",
  },
  deleteButton: {
    backgroundColor: "#424874",
    width: 40,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    justifyContent: "center",
  },
  icon: {
    alignSelf: "center",
    color: "#F4EEFF",
  },
});
