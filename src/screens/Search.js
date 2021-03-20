import React from "react";
// import { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Text,
  TextInput,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9bbf2",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
      <TextInput
        style={styles.input}
        placeholder="search for jobs"
        keyboardType="default"
      />
      <Button title="Search" />
    </SafeAreaView>
  );
}
