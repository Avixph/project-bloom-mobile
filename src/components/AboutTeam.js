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

//call object props here?
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fad085",
    // marginVertical: 20,

    paddingHorizontal: "5%",
    paddingVertical: "8%",

    margin: 10,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 20,
  },
  teamPic: {

    width: 190,
    height: 190,
    borderRadius: 20,
  },
  fullName: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: "2%",
  },
  role: {
    fontSize: 18,
    marginBottom: "5%",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",

  },
  buttonGithub: {
    backgroundColor: "#7A559A",
    borderRadius: 20,
    width: "25%",

    padding: "2%",
    // marginVertical: "3%",
    marginHorizontal: "4%",
    alignItems: "center",
  },
  buttonLinkedIn: {
    backgroundColor: "#7a559a",
    borderRadius: 20,
    width: "25%",
    padding: "2%",
    // marginVertical: "3%",
    marginHorizontal: "4%",
    alignItems: "center",
  },
  textGithub: {},
  textLinkedIn: {},

});
export default function AboutTeam(props) {
  const openGithub = () => {
    WebBrowser.openBrowserAsync(props.links.github);
  };
  const openLinkedIn = () => {
    WebBrowser.openBrowserAsync(props.links.linkedin);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.teamPic} source={{ uri: `${props.pic}` }} />

      <Text style={styles.fullName}>
        {props.name.first} {props.name.last}
      </Text>
      <Text style={styles.role}>{props.name.role}</Text>

      <View style={styles.fixToText}>
        <TouchableOpacity style={styles.buttonGithub} onPress={openGithub}>
          <MaterialCommunityIcons name="github" size={53} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLinkedIn} onPress={openLinkedIn}>
          <MaterialCommunityIcons name="linkedin" size={53} />
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}
