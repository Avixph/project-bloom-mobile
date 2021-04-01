import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from "react-native";
import { fetchSearch } from "../redux/searchJobSlice";
import { useLight } from "../contexts/HandleLightsOut";

const stylesLight = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9bbf2",
    marginVertical: "-50%",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    color: "#000000",
  },
  input: {
    height: 55,
    margin: 12,
    borderWidth: 1,
    color: "#000000",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderColor: "#ffd085",
    borderWidth: 2,
    textAlign: "center",
    width: 328,
    fontSize: 20,
  },
});

const stylesDark = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#250246",
    marginTop: "-15%",
    marginBottom: "-10%",
  },
  separator: {
    marginVertical: 8,
    marginTop: "8%",
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    color: "#e5e5e5",
  },
  input: {
    height: 55,
    margin: 12,
    borderWidth: 1,
    color: "#000000",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderColor: "#e5e5e5",
    borderWidth: 2,
    textAlign: "center",
    width: 328,
    fontSize: 20,
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
      <TextInput
        style={lightState ? stylesDark.input : stylesLight.input}
        placeholder="search for jobs"
        keyboardType="default"
        onChangeText={(val) => setSearch(val)}
        onSubmitEditing={() => handleSearch()}
      />
      <View style={lightState ? stylesDark.separator : stylesLight.separator} />
    </SafeAreaView>
  );
}
