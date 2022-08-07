import { Text, View, Button } from "react-native";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Detail Screen"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};
export default HomeScreen;
