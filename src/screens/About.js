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


const stylesLight = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9bbf2",
  },
  text: {
    color: "#240046",
  }
});

const stylesDark = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#250246",
  },
  text: {
    color: "#e5e5e5",
  }
});

export default function AboutScreen() {
  const lightState = useLight();
  const lightDarkStatusColor = lightState ? "light-content" : "default";

  return (
    <SafeAreaView style={lightState ? stylesDark.container : stylesLight.container}>
      <StatusBar barStyle={lightDarkStatusColor} />
      <Text style={lightState ? stylesDark.text : stylesLight.text}>About</Text>
    </SafeAreaView>
  );
}
