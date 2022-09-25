// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import { BlogProvider } from "./src/context/BlogContext";

function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
