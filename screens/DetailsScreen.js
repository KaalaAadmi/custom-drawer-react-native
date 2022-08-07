import { Text, View, Button } from "react-native";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detail Screen</Text>
      <Button
        title="Go to Detail Screen Again"
        onPress={() => navigation.push("Details")}
      />
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate("Home")}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Go to First Screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default DetailsScreen;
