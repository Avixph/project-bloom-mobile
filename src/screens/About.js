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
  },
  aboutText: {
    color: "#240046",
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
    marginBottom: "5%",
    fontWeight: "300",
    fontSize: 30,
    marginTop: "10%"

    

  },
  aboutText: {
    color: "#e5e5e5",
    
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
