import React from "react";
// import { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9bbf2",
  },
  button: {
    width: 100,
    height: 20,
    backgroundColor: "#aa88c67b",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default function RandomJobList() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Remote Jobs available</Text>
      <TouchableOpacity style={styles.button}>
        <Text>reload</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
