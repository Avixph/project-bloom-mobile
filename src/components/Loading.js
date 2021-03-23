import React from "react";
import { StyleSheet, SafeAreaView, Image } from "react-native";

const bloomLogoLight = require("../images/logos/project-bloom-logo-light.png");
const bloomLogoDark = require("../images/logos/project-bloom-logo-dark.png");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9bbf2",
  },
  logo: { width: "80%" },
});

export default function Loading() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={bloomLogoLight} resizeMode="contain" style={styles.logo} />
    </SafeAreaView>
  );
}
