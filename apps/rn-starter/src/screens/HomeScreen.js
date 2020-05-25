import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Welcome to React Native</Text>
      <Button title="Components > " onPress={() => props.navigation.navigate('Components') } />
      <Button title="List > " onPress={() => props.navigation.navigate('List') } />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "#f00",
    fontWeight: "bold",
  },
});

export default HomeScreen;
