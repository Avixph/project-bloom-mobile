import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import SearchField from "../components/SearchField";
import SearchJobList from "../components/SearchJobList";
import { useLight } from "../contexts/HandleLightsOut";

const stylesLight = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9bbf2",
  },
});

const stylesDark = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#250246",
  },
});

export default function Search({ navigation: { navigate } }) {
  const lightState = useLight();
  const lightDarkStatusColor = lightState ? "light-content" : "default";

  return (
    <SafeAreaView
      style={lightState ? stylesDark.container : stylesLight.container}
    >
      <StatusBar barStyle={lightDarkStatusColor} />
      <SearchField />
      <SearchJobList navigate={navigate} />
    </SafeAreaView>
  );
}
