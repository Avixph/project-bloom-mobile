import React from "react";
// import { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Button, Text } from "react-native";
import HomeBannerLight from "../images/design_elements/project-bloom-home-banner-light.svg";

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
});

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
      <HomeBannerLight width={"50%"} />

      <Button title="Search" onPress={() => navigation.navigate("Search")} />
      <Button title="About" onPress={() => navigation.navigate("About")} />
    </SafeAreaView>
  );
}
