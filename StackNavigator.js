import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./src/sreeens/IndexScreen";
import ShowScreen from "./src/sreeens/ShowScreen";
import CreateScreen from "./src/sreeens/CreateScreen";
import EditScreen from "./src/sreeens/EditScreen";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Index" component={IndexScreen} />
      <Stack.Screen name="Show" component={ShowScreen} />
      <Stack.Screen name="Create" component={CreateScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
