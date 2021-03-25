import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  // FlatList,
  ScrollView,
  Text,
  Image,
  StatusBar,
} from "react-native";
import RandomJobList from "../components/RandomJobList";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "99.53%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9bbf2",
  },
  randomJobs: {
    width: "99.53%",
  },
});

export default function Home({ navigation: { navigate } }) {
  return (
    <SafeAreaView style={styles.container}>
      <RandomJobList navigate={navigate} />
    </SafeAreaView>
  );
}
