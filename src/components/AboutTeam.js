import React from "react";
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
  return (
    <SafeAreaView style={styles.container}>
      <Image style={ styles.teamPic} source={{ uri: `${props.pic}` }} />
    </SafeAreaView>
  );
}
