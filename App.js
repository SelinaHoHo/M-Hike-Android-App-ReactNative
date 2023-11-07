import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import Database from "./database/Database";
import HomeScreen from "./screens/HomeScreen";
import AddHikeLogsScreen from "./screens/AddHikeLogsScreen";
import DetailHikeLogsScreen from "./screens/DetailHikeLogsScreen";

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    Database.initDatabase();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="HOME" component={HomeScreen} />
        <Stack.Screen name="ADD NEW HIKE" component={AddHikeLogsScreen} />
        <Stack.Screen name="HIKE LOG DETAIL" component={DetailHikeLogsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
