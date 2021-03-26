import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useLight, useUpdateLight } from "../contexts/HandleLightsOut"



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

  const lightState = useLight();
  console.log(lightState);
  
  const updateLightState = useUpdateLight();



  return (
    <TouchableOpacity
      style={styles.button}
      onPress={updateLightState}
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
