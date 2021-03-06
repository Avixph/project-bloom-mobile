import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useUpdateLight } from "../contexts/HandleLightsOut";
import { useLight } from "../contexts/HandleLightsOut";

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
  const updateLightState = useUpdateLight();
  const lightState = useLight();
  const lightDarkColor = lightState ? "#e5e5e5" : "#ffd085";

  return (
    <TouchableOpacity style={styles.button} onPress={updateLightState}>
      <MaterialCommunityIcons
        name="lightbulb"
        size={33}
        color={lightDarkColor}
        style={styles.icon}
      />
      <View></View>
    </TouchableOpacity>
  );
}
