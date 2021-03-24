import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Image,
  Text,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9bbf2",
  },
  companyLogo: {
    width: 128,
    height: 128,
  },
});

export default function SearchJobList() {
  const jobsRequest = useSelector((state) => state.searches.searchJobs);
  const status = useSelector((state) => state.searches.status);

  console.log(jobsRequest.company_name);

  console.log(jobsRequest.company_name);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={jobsRequest}
          renderItem={({ item }) => (
            <View>
              <Image
                style={styles.companyLogo}
                source={{ uri: `${item.company_logo_url}` }}
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