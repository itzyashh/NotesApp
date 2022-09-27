import React from "react";
import { TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
export default ({
  navigation,
  Icon,
  Iconname,
  routeName,
  id,
  headerTitle,
  iconSize,
}) => {
  const route = useRoute();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: headerTitle ? headerTitle : route.name,
      headerStyle: { backgroundColor: "#A6B1E1" },
      headerTitleStyle: { color: "#424874" },
      headerRight: Icon
        ? () => (
            <TouchableOpacity
              onPress={() => navigation.navigate(routeName, { id })}
            >
              {Icon && (
                <Icon
                  name={Iconname}
                  size={iconSize ? iconSize : 26}
                  color="#F4EEFF"
                />
              )}
            </TouchableOpacity>
          )
        : null,
    });
  }, [navigation]);
  return [navigation];
};
