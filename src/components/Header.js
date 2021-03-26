import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { useLight } from "../contexts/HandleLightsOut";



const bloomLogoLight = require("../images/logos/project-bloom-logo-light.png");
const bloomLogoDark = require("../images/logos/project-bloom-logo-dark.png");

const stylesLight = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  logoContainer: {
    position: "absolute",

    // left: 16,
  },
  logo: { width: "60%", marginBottom: 10 },
});

const stylesDark = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  logoContainer: {
    position: "absolute",

    // left: 16,
  },
  logo: { width: "60%", marginBottom: 10 },
});

export default function Header() {

  

  return (
    <View style={stylesLight.header}>
      <Image source={bloomLogoLight} resizeMode="contain" style={stylesLight.logo} />
    </View>
  );
}
