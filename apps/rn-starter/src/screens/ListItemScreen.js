import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";
const techs = [
  { name: "html" },
  { name: "css" },
  { name: "javascript" },
  { name: "nodejs" },
  { name: "mongodb" },
  { name: "mysql" },
  { name: "webpack" },
  { name: "docker" },
  { name: "hybrid" },
  { name: "flutter" },
  { name: "react native" },
];
const ListItemScreen = () => {
  return (
    <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
      keyExtractor={tech => tech.name}
      data={techs}
      renderItem={({ item }) => <Text style={styles.text}>{item.name}</Text>}
    />
  );
};

const styles = StyleSheet.create({
    text: {
        marginHorizontal: 25
    }
});

export default ListItemScreen;
