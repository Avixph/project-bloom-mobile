import React from "react";
import { StyleSheet, SafeAreaView, Image } from "react-native";
import { useLight } from "../contexts/HandleLightsOut";

const bloomLogoLight = require("../images/logos/project-bloom-logo-light.png");
const bloomLogoDark = require("../images/logos/project-bloom-logo-dark.png");

const stylesLight = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9bbf2",
  },
  logo: { width: "80%" },
});
const stylesDark = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#240046",
  },
  logo: { width: "80%" },
});

export default function Loading() {
  const lightState = useLight();

  return (
    <SafeAreaView
      style={lightState ? stylesDark.container : stylesLight.container}
    >
      <Image
        source={lightState ? bloomLogoDark : bloomLogoLight}
        resizeMode="contain"
        style={lightState ? stylesDark.logo : stylesLight.logo}
      />
    </SafeAreaView>
  );
}
