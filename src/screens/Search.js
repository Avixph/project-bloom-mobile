import React from "react";
import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";

//Thunk
import { fetchSearch } from "../redux/searchJobSlice"

import {
  StyleSheet,
  SafeAreaView,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from "react-native";



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

export default function SearchScreen() {
  const [search, setSearch] = useState("");

  
  const dispatch = useDispatch();
  const jobsRequest = useSelector((state) => state.searches.searchJobs);
  const status = useSelector((state) => state.searches.status);

  console.log(jobsRequest.company_name);
  
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
        onChangeText={((val) => setSearch(val))}
      />
      <TouchableOpacity
        onPress={ handleSearch }
      >
        <Text>Search</Text>
      </TouchableOpacity>
      <View>
        <FlatList
          data={jobsRequest}
          renderItem={({ item }) => (
            <View>
              <Image
                style={styles.companyLogo}
                source={{uri: `${item.company_logo_url}`}}
              />
              <Text>{item.title}</Text>
              <Text>{item.company_name}</Text>
            </View>
          )}
        />


        {/* {jobsRequest.map((item, index) => {
          return (
            <View key={index}>
            <Image
                source={{uri: `${item.company_logo_url}`}}
              />
              <Text>{item.title}</Text>
              <Text>{item.company_name}</Text>
            </View>
          )
        })} */}
      </View>
    </SafeAreaView>
  );
}
