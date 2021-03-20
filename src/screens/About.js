import React from "react";
// import { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Button, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9bbf2",
  },
});

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>About</Text>
    </SafeAreaView>
  );
}
