import React from "react";
import { StyleSheet, View, Image } from "react-native";
import BloomLogoLight from "../images/logos/project-bloom-logo-light.svg";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    marginBottom: 11,
    marginLeft: -95,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    position: "absolute",
    left: 16,
  },
});

export default function Header() {
  // const bloomLogo = require(logo);

  return (
    <View style={styles.header}>
      <BloomLogoLight width={"76%"} />
    </View>
  );
}
