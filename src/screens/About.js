import React from "react";
// import { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Button,
  Text,
} from "react-native";
import { useLight } from "../contexts/HandleLightsOut";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9bbf2",
  },
});

export default function AboutScreen() {
  const lightState = useLight();
  const lightDarkStatusColor = lightState ? "light-content" : "default";

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={lightDarkStatusColor} />
      <Text>About</Text>
    </SafeAreaView>
  );
}
