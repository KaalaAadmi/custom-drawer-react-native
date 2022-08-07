import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import "react-native-gesture-handler";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ProfileScreen from "./screens/ProfileScreen";
import MainTabScreen from "./screens/MainTabScreen";
import DrawerContent from "./screens/DrawerContent";
import SupportScreen from "./screens/SupportScreen";
import BookmarkScreen from "./screens/BookMarkScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
          headerStyle: {
            backgroundColor: "#009378",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="Support" component={SupportScreen} />
        <Drawer.Screen name="Bookmarks" component={BookmarkScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        {/* <Drawer.Screen name="Support" component={SupportScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
