import React from "react";
// import { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Button, Text, Image } from "react-native";

const homeBannerLight = require("../images/design_elements/project-bloom-home-banner-light.png");

const homeBannerDark = require("../images/design_elements/project-bloom-home-banner-dark.png");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9bbf2",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  bannerImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
  },
});

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome</Text>
      <Image
        source={homeBannerLight}
        resizeMode="contain"
        style={styles.bannerImage}
      />
      <Button title="Search" onPress={() => navigation.navigate("Search")} />
      <Button title="About" onPress={() => navigation.navigate("About")} />
    </SafeAreaView>
  );
}
