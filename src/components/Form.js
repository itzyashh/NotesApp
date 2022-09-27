import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import BlogContext from "../context/BlogContext";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

const Form = ({ label, onSave, initialState, id }) => {
  const { data } = useContext(BlogContext);
  const [title, setTitle] = useState(initialState.title);
  const [description, setDescription] = useState(initialState.description);
  let blogPost = {};
  id ? (blogPost = blogPost = data.find((r) => r.id === id)) : null;
  return (
    <>
      <ScrollView style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={title}
          placeholder={label.title + ".."}
          onChangeText={(e) => setTitle(e)}
        />
        <TextInput
          multiline={true} // ios fix for centering it at the top-left corner
          numberOfLines={10}
          style={styles.textInputDescription}
          placeholder={label.description + ".."}
          value={description}
          onChangeText={(e) => setDescription(e)}
        />

        {(title.length > 0 && title !== blogPost.title) ||
        (description.length > 0 && description !== blogPost.description) ? (
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              title="save"
              onPress={() => onSave(title, description)}
            />
          </View>
        ) : null}
      </ScrollView>
    </>
  );
};

Form.defaultProps = {
  id: null,
  initialState: { title: "", description: "" },
};
export default Form;

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    marginVertical: 60,
    marginHorizontal: 15,
    backgroundColor: "#F4EEFF",
  },
  textInput: {
    fontSize: 20,
    paddingHorizontal: 10,
    backgroundColor: "#F4EEFF",
    height: responsiveHeight(8),
    borderRadius: 12,
  },
  textInputDescription: {
    fontSize: 18,
    paddingHorizontal: 10,
    backgroundColor: "#F4EEFF",
    height: responsiveHeight(8),
    borderRadius: 12,
  },
  buttonContainer: {
    marginTop: 10,
    height: responsiveHeight(59),
    justifyContent: "flex-end",
  },
  button: {
    borderRadius: 45,
  },
});
