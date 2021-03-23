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

const styles = StyleSheet.create({
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default function SearchField() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  function handleSearch() {
    const field = search;
    dispatch(fetchSearch(field));
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
      <TextInput
        style={styles.input}
        placeholder="search for jobs"
        keyboardType="default"
        onChangeText={(val) => setSearch(val)}
      />
      <TouchableOpacity onPress={handleSearch}>
        <Text>Search</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
