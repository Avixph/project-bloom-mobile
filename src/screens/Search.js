import React from "react";
// import { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Text,
  TextInput,
} from "react-native";
import SearchField from "../components/SearchField";
import SearchJobList from "../components/SearchJobList";

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

export default function Search() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchField />
      <SearchJobList />
    </SafeAreaView>
  );
}
