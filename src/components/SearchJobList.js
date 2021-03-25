import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Image,
  Text,
  ScrollView,
} from "react-native";
import JobPost from "./JobPost";



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9bbf2",
  },
  flatList: {
    backgroundColor: "pink",
    marginTop: -25,
    width: "99.53%",
  },
  companyLogo: {
    width: 128,
    height: 128,
  },
});

export default function SearchJobList({navigate}) {
  const jobsRequest = useSelector((state) => state.searches.searchJobs);


  const renderSearchList = () => {
    return jobsRequest.map((jobInfo, index) => {
      return <JobPost {...jobInfo} navigate={navigate} key={index} />;
    });
  }


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ScrollView style={styles.scrollView}>
          <View>{renderSearchList()}</View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
