import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  button: {
    width: 39,
    height: 39,
    backgroundColor: "#aa88c67b",
    marginRight: 18,
    marginBottom: 9,
    alignItems: "center",
    borderRadius: 10,
  },
  icon: {
    marginTop: 2.1,
  },
});

export default function LightsOut() {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => alert("This is a button!")}
    >
      <MaterialCommunityIcons
        name="lightbulb"
        size={33}
        color="#ffd085"
        style={styles.icon}
      />
      <View></View>
    </TouchableOpacity>
  );
}
