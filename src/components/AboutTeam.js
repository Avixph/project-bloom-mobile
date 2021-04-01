import React from "react";
import * as WebBrowser from "expo-web-browser";
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Text,
  Image,
} from "react-native";
//call object props here?
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9bbf2",
    padding: 10,
    margin: 10,
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 17,
    
  },
  teamPic: { width: 120, height: 120 },
  buttonLinkedIn: {},
  buttonGithub: {},
  textGithub:{},
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
      <TouchableOpacity style={styles.buttonGithub} onPress={openGithub}>
        <Text style={styles.textGithub}>Github </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonLinkedIn} onPress={openLinkedIn}>
        <Text style={styles.textLinkedIn}>LinkedIn</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
