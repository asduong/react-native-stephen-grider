import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend 1", age: 20 },
    { name: "Friend 2", age: 45 },
    { name: "Friend 3", age: 50 },
    { name: "Friend 4", age: 60 },
    { name: "Friend 5", age: 23 },
    { name: "Friend 6", age: 24 },
    { name: "Friend 7", age: 30 },
    { name: "Friend 8", age: 31 },
    { name: "Friend 9", age: 40 },
    { name: "Friend 10", age: 50 },
    { name: "Friend 11", age: 53 }
  ];

  return (
    // Flatlist renders an array with objects inside, it is required to have a data prop and a renderItem prop
    // data prop is the array of objects
    // renderItem prop renders the data props data
    <FlatList
      // horizontal - this is a prop that is basically horizontal={true}
      // showsHorizontalScrollIndicator={false}
      // showsVerticalScrollIndicator={false}
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        // element === {item: {name: 'Friend 1'}, index: 0}
        // item === {name: 'Friend 1}
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
        // if you dont use keys, by default React Native deletes everything on the screen and then re-renders the data
        // and rebuilds the list. By using keys, React Native knows to find the key and delete that one key
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 2
  }
});

export default ListScreen;
