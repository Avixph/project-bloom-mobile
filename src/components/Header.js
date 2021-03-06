import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { useLight } from "../contexts/HandleLightsOut";

const bloomLogoLight = require("../images/logos/project-bloom-logo-light.png");
const bloomLogoDark = require("../images/logos/project-bloom-logo-dark.png");

const styles = StyleSheet.create({
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
  const lightState = useLight();

  return (
    <View style={styles.header}>
      <Image
        source={lightState ? bloomLogoDark : bloomLogoLight}
        resizeMode="contain"
        style={styles.logo}
      />
    </View>
  );
}
