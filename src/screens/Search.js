import React from "react";



import {
  StyleSheet,
  SafeAreaView,
} from "react-native";
import SearchField from "../components/SearchField";
import SearchJobList from "../components/SearchJobList";



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9bbf2",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  companyLogo: {
    width: 100,
    height: 100,
  }
});


export default function Search({ navigation: {navigate }}) {
  return (
    <SafeAreaView style={styles.container}>
      <SearchField />
      <SearchJobList navigate={navigate} />
    </SafeAreaView>
  );
}
