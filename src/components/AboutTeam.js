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
  },
  teamPic: { width: 120, height: 120 },
});

export default function AboutTeam(props) {
  const openGithub = () => {
    WebBrowser.openBrowserAsync(props.links.github)
  }
  const openLinkedIn = () => {
    WebBrowser.openBrowserAsync(props.links.linkedin)
  }
    
  return (
    <SafeAreaView style={styles.container}>
      <Image style={ styles.teamPic} source={{ uri: `${props.pic}` }} />
      <Text>{props.name.first} {props.name.last}</Text>
      <Text>{props.name.role}</Text>
      <TouchableOpacity onPress={openGithub}><Text>Github</Text></TouchableOpacity>
      <TouchableOpacity onPress={openLinkedIn}><Text>LinkedIn</Text></TouchableOpacity>
    </SafeAreaView>

  );
}
