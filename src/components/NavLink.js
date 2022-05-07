import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

// NavLink isn't being rendered by our navigator so we need to call the withNavigation helper function so that it can gain access to the navigation object

const NavLink = ({ navigation, routeName, text }) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Spacer>
          <Text style={styles.link}>{text}</Text>
        </Spacer>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "rgb(226, 226, 226)",
  },
});

export default withNavigation(NavLink);
