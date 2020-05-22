import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.text}>Welcome to React Native</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "#f00",
    fontWeight: "bold"
  }
});

export default HomeScreen;
