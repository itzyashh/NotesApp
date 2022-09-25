import React from "react";
import { TouchableOpacity } from "react-native";
export default ({ navigation, Icon, Iconname }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#A6B1E1" },
      headerTitleStyle: { color: "#424874" },
      headerRight: Icon
        ? () => (
            <TouchableOpacity onPress={() => navigation.navigate("Create")}>
              {Icon && <Icon name={Iconname} size={26} color="#F4EEFF" />}
            </TouchableOpacity>
          )
        : null,
    });
  }, [navigation]);

  return [navigation];
};
