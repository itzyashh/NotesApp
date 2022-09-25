import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./src/sreeens/IndexScreen";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Index" component={IndexScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
