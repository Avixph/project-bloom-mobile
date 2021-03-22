import React, { useContext } from "react";
import LandingContext from "../context/LandingContext";
import { StyleSheet, SafeAreaView, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9bbf2",
  },
  button: {
    width: 39,
    height: 39,
    backgroundColor: "#aa88c67b",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default function Landing() {
  const { landing } = useContext(LandingContext);
  return (
    <SafeAreaView style={styles.container}>
      <Text>bloom</Text>

      <TouchableOpacity
        title="Enter"
        style={styles.button}
        onPress={() => landing()}
      />
    </SafeAreaView>
  );
}
