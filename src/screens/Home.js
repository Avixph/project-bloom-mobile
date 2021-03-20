import React from "react";
// import { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Button, Text, Image } from "react-native";
import homeBannerLight from "../images/design_elements/project-bloom-home-banner-light.png";

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
  homeBanner: {
    width: "50%",
  },
});

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
      <Image source={{ uri: homeBannerLight }} style={styles.homeBanner} />

      <Button title="Search" onPress={() => navigation.navigate("Search")} />
      <Button title="About" onPress={() => navigation.navigate("About")} />
    </SafeAreaView>
  );
}
