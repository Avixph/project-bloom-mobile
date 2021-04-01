import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  ScrollView,
} from "react-native";
import { useLight } from "../contexts/HandleLightsOut";
import AboutTeam from "../components/AboutTeam";
import { teamBloom } from "../services/team.json";

const stylesLight = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9bbf2",
  },
  aboutHeader: {
    color: "#240046",
    fontWeight: "bold",
    fontSize: 35,
    marginBottom: "5%",
  },
  aboutText: {
    color: "#240046",
    marginTop: "5%",
    marginBottom: "10%",
    marginHorizontal: "5%",
    textAlign: "center",
  },
});
const stylesDark = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#250246",
  },
  aboutHeader: {
    color: "#e5e5e5",
    fontWeight: "bold",
    fontSize: 35,
    marginBottom: "5%",
  },
  aboutText: {
    color: "#e5e5e5",
    marginTop: "5%",
    marginBottom: "10%",
    marginHorizontal: "5%",
    textAlign: "center",
  },
});
export default function AboutScreen() {
  const lightState = useLight();
  const lightDarkStatusColor = lightState ? "light-content" : "default";
  const renderTeam = () => {
    return teamBloom.map((teamInfo, index) => {
      return <AboutTeam {...teamInfo} key={index} />;
    });
  };
  return (
    <SafeAreaView
      style={lightState ? stylesDark.container : stylesLight.container}
    >
      <StatusBar barStyle={lightDarkStatusColor} />
      <Text
        style={lightState ? stylesDark.aboutHeader : stylesLight.aboutHeader}
      >
        About
      </Text>
      <ScrollView>
        <Text style={lightState ? stylesDark.aboutText : stylesLight.aboutText}>
          The goal of bloom is to streamline the remote job searching process
          for remote workers. We will help decrease the amount of time it takes
          to find relevant roles for the skills one is proficient in and the
          location they are in.
        </Text>
        <View>{renderTeam()}</View>
      </ScrollView>
    </SafeAreaView>
  );
}
