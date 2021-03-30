import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import { fetchSearch } from "../redux/searchJobSlice";
import { useLight } from "../contexts/HandleLightsOut";

const stylesLight = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9bbf2",
  },
  // separator: {
  //   marginVertical: 8,
  //   borderBottomColor: "#737373",
  //   borderBottomWidth: StyleSheet.hairlineWidth,
  // },
  text: {
    color: "#000000",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

const stylesDark = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#250246",
  },
  // separator: {
  //   marginVertical: 8,
  //   borderBottomColor: "#737373",
  //   borderBottomWidth: StyleSheet.hairlineWidth,
  // },
  text: {
    color: "#e5e5e5",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    color: "#e5e5e5",
  },
});

export default function SearchField() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const lightState = useLight();

  function handleSearch() {
    const field = search;
    dispatch(fetchSearch(field));
  }

  return (
    <SafeAreaView
      style={lightState ? stylesDark.container : stylesLight.container}
    >
      {/* <Text style={lightState ? stylesDark.text : stylesLight.text}>Home</Text> */}
      <TextInput
        style={lightState ? stylesDark.input : stylesLight.input}
        placeholder="search for jobs"
        keyboardType="default"
        onChangeText={(val) => setSearch(val)}
      />
      <TouchableOpacity onPress={handleSearch}>
        <Text style={lightState ? stylesDark.text : stylesLight.text}>
          Search
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
