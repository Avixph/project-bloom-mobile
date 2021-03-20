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

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>bloom</Text>
      <Button title="Enter" onPress={() => navigation.navigate("Home")} />
    </SafeAreaView>
  );
}
