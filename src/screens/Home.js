import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import RandomJobList from "../components/RandomJobList";
import { useLight } from "../contexts/HandleLightsOut";

const stylesLight = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9bbf2",
  },
  randomJobs: {
    width: "99.53%",
  },
});

const stylesDark = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#240046",
  },
});

export default function Home({ navigation: { navigate } }) {
  const lightState = useLight();
  console.log(lightState);
  const lightDarkStatusColor = lightState ? "light-content" : "default";

  return (
    <SafeAreaView
      style={lightState ? stylesDark.container : stylesLight.container}
    >
      <StatusBar barStyle={lightDarkStatusColor} />
      <RandomJobList navigate={navigate} />
    </SafeAreaView>
  );
}
