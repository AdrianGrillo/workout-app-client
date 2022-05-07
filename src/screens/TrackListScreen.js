import React from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
} from "react-native";
import ListItem from "react-native-elements/dist/list/ListItem";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";

const TrackListScreen = ({ navigation }) => {
  // const { state, fetchTracks } = React.useContext(TrackContext)

  state = [
    {
      name: "Around the Block",
      id: 1,
    },
    {
      name: "To the Store",
      id: 1,
    },
    {
      name: "Running the Track",
      id: 1,
    },
    {
      name: "Evening Walk",
      id: 1,
    },
    {
      name: "It Works!",
      id: 1,
    },
    {
      name: "Test Test",
      id: 1,
    },
  ];

  return (
    <View style={styles.container}>
      {/* <NavigationEvents /> */}
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        style={styles.flatList}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TrackDetail", { _id: item._id })
              }
            >
              <ListItem style={styles.listItem}>
                <ListItem.Content style={styles.listItemContent}>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

// TrackListScreen.navigationOptions = {
//   title: "Tracks",
// };

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    marginBottom: 200,
  },
  flatList: {
    backgroundColor: "blue",
  },
  listItem: {
    backgroundColor: "red",
  },
  listItemContent: {
    // backgroundColor: "blue",
  },
});

export default TrackListScreen;
