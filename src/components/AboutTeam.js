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
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    margin: 10,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 17,
  },
  teamPic: {
    width: 160,
    height: 160,
  },
  fixToText:{
  flexDirection: "row",
  justifyContent:"space-between",
  },
  buttonGithub: {
    backgroundColor: "#7A559A",
    borderRadius: 20,
    width: "25%",
    marginVertical: "2%",
    padding: "1%",
  },
  buttonLinkedIn: {
    backgroundColor: "#7A559A",
    borderRadius: 20,
    width: "25%",
    marginVertical: "2%",
    padding: "1%",
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
      <Text>
        {props.name.first} {props.name.last}
      </Text>
      <Text>{props.name.role}</Text>
      <View styles={styles.fixToText}>
      <TouchableOpacity style={styles.buttonGithub} onPress={openGithub}>
        <MaterialCommunityIcons name="github" size={55} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonLinkedIn} onPress={openLinkedIn}>
        <MaterialCommunityIcons name="linkedin" size={55} />
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
