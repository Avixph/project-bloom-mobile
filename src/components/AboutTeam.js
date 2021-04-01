import React from "react";
import * as WebBrowser from "expo-web-browser";
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Text,
  Image,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useLight } from "../contexts/HandleLightsOut";

const stylesLight = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fad085",
    paddingHorizontal: "5%",
    paddingVertical: "8%",
    marginBottom: "8%",
    marginHorizontal: "8%",
    borderRadius: 20,
  },
  teamPic: {
    width: 190,
    height: 190,
    borderRadius: 20,
    borderColor: "#aa88c6",
    borderWidth: 2,
  },
  fullName: {
    color: "#240046",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: "2%",
    marginHorizontal: "1%",
  },
  role: {
    color: "#7a559a",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: "5%",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialButton: {
    backgroundColor: "#240046",
    borderRadius: 20,
    width: "35%",
    padding: "2%",
    marginHorizontal: "5%",
    marginTop: "2%",
    marginBottom: "-2%",
    alignItems: "center",
  },
  socialIcon: {
    fontSize: 53,
    color: "#ffd085",
  },
});
const stylesDark = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e5e5e5",
    paddingHorizontal: "5%",
    paddingVertical: "8%",
    marginBottom: "8%",
    marginHorizontal: "8%",
    borderRadius: 20,
  },
  teamPic: {
    width: 190,
    height: 190,
    borderRadius: 20,
    borderColor: "#7a559a",
    borderWidth: 2,
  },
  fullName: {
    color: "#240046",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: "2%",
    marginHorizontal: "1%",
  },
  role: {
    color: "#7a559a",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: "5%",
    textAlign: "center",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialButton: {
    backgroundColor: "#ffd085",
    borderRadius: 20,
    width: "35%",
    padding: "2%",
    marginHorizontal: "5%",
    marginTop: "2%",
    marginBottom: "-2%",
    alignItems: "center",
  },
  socialIcon: {
    fontSize: 53,
    color: "#240046",
  },
});

export default function AboutTeam(props) {
  const lightState = useLight();
  const openGithub = () => {
    WebBrowser.openBrowserAsync(props.links.github);
  };
  const openLinkedIn = () => {
    WebBrowser.openBrowserAsync(props.links.linkedin);
  };

  return (
    <SafeAreaView
      style={lightState ? stylesDark.container : stylesLight.container}
    >
      <Image
        style={lightState ? stylesDark.teamPic : stylesLight.teamPic}
        source={{ uri: `${props.pic}` }}
      />

      <Text style={lightState ? stylesDark.fullName : stylesLight.fullName}>
        {props.name.first} {props.name.last}
      </Text>
      <Text style={lightState ? stylesDark.role : stylesLight.role}>
        {props.name.role}
      </Text>

      <View style={lightState ? stylesDark.fixToText : stylesLight.fixToText}>
        <TouchableOpacity
          style={
            lightState ? stylesDark.socialButton : stylesLight.socialButton
          }
          onPress={openGithub}
        >
          <MaterialCommunityIcons
            name="github"
            style={lightState ? stylesDark.socialIcon : stylesLight.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={
            lightState ? stylesDark.socialButton : stylesLight.socialButton
          }
          onPress={openLinkedIn}
        >
          <MaterialCommunityIcons
            name="linkedin"
            style={lightState ? stylesDark.socialIcon : stylesLight.socialIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
